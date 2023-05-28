const httpStatus = require("http-status");
const moment = require('moment');
const {
  list,
  insert,
  modify,
} = require("../services/Epresence");

const index = (req, res) => {
  list()
    .then((data) => {
      const formattedData = {
        message: "Success get data",
        data: []
      };
      let currentEntry = null;
      for (const item of data) {
        if (item.type === 'IN') {
          // New entry for masuk
          currentEntry = {
            "id_user": item.user.id,
            "nama_user": item.user.nama,
            "tanggal": item.waktu.toISOString().split('T')[0],
            "waktu_masuk": item.waktu.toISOString().split('T')[1].substring(0, 8),
            "status_masuk": item.isApprove ? "APPROVE" : "REJECT",
            "waktu_pulang": "",
            "status_pulang": ""
          };
          formattedData.data.push(currentEntry);
        } else if (item.type === 'OUT' && currentEntry) {
          // Update existing entry for pulang
          currentEntry["waktu_pulang"] = item.waktu.toISOString().split('T')[1].substring(0, 8);
          currentEntry["status_pulang"] = item.isApprove ? "APPROVE" : "REJECT";
          currentEntry = null; // Reset currentEntry for the next masuk entry
        }
      }
      res.status(httpStatus.OK).send(formattedData);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: error });
    });
};

const create = (req, res) => {
  req.body.id_users = req.user.id
  insert(req.body)
    .then((data) => {
      const waktu = moment(data.waktu).format("YYYY-MM-DD HH:mm:ss");
      res.status(httpStatus.OK).send({
        type: data.type,
        waktu: waktu
      });
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        message: "There was a problem during registration",
        error: error,
      });
    });
};

const update = (req, res) => {
  // console.log(req.params.id);
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "Id infermotion crash",
    });
  }

  modify(req.params?.id, req.user)
    .then((data) => {
      if (data) {
        res.status(httpStatus.OK).send({ message: "epresence approved" });
      } else {
        res.status(httpStatus.BAD_REQUEST).send({ message: "This user not belongs to you" });
      }
    })
    .catch((e) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "There was a problem during transaction"+e })
    );
};

module.exports = {
  index,
  create,
  update,
};
