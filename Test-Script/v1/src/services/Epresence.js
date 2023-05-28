const Epresence = require("../models/Epresence");
const User = require("../models/users");

const list = async () => {
  const epresence = await Epresence.findAll({
    include: User,
    order: [['waktu', 'ASC']]
  });
  return epresence
};

const insert = async (data, userId) => {
  epresenceData = {
    user_id: userId,
    ...data,
  };
  const epresence = await Epresence.create(epresenceData);
  return epresence;
};

const modify = async (id, req) => {
  const Cekepresence = await Epresence.findOne(
    {
      include: User
    },
    { 
      where: {id:id} 
    }
    );

  if (Cekepresence.user.npp_supervisor !== req.npp) {
    return false
  }

  const epresence = await Epresence.update(
    { 
      isApprove: true
    },
    {
      where: { id: id },
    }
  );
  return epresence;
};

module.exports = {
  list,
  insert,
  modify
};
