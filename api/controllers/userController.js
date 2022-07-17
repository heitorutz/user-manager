const Users = require('../model/users');

exports.getAllUsers = async (req, res) => {
    const allUsers = await Users.find();

    res.status(200).json({
        status: 'success',
        data: {
            users: allUsers
        }
    });
};

exports.deleteAllUsers = async (req, res) => {
    await Users.deleteMany();

    res.status(200).json({
        status: 'success',
        data: null
    })
}

exports.getUser = async (req, res) => {
    const user = await Users.findById(req.params.id);

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
};

exports.createUser = async (req, res) => {
    const user = await Users.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    });
};

exports.updateUser = async (req, res) => {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
};

exports.deleteUser = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: 'success',
        data: null
    });
};