module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      // Model attributes are defined here
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nickName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "User"
    },
  );
  User.generateUsername = async function (firstName, lastName) {
    const baseUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
    let username = baseUsername;
    let count = 1;

    // eslint-disable-next-line no-await-in-loop
    while (await User.findOne({ where: { username } })) {
      username = `${baseUsername}${count}`;
      count += 1;
    }

    return username;
  };
  return User;
}