const Account = require('../models/Account');

// Add new account
exports.createAccount = async (req, res) => {
    try {
        const account = new Account(req.body);
        await account.save();
        res.status(201).json({ message: 'Account created successfully', data: account });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all accounts
exports.getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json({ data: accounts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get account by ID
exports.getAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findById(id);
        if (!account) return res.status(404).json({ message: 'Account not found' });
        res.status(200).json({ data: account });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update account by ID
exports.updateAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findByIdAndUpdate(id, req.body, { new: true });
        if (!account) return res.status(404).json({ message: 'Account not found' });
        res.status(200).json({ message: 'Account updated successfully', data: account });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete account by ID
exports.deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const account = await Account.findByIdAndDelete(id);
        if (!account) return res.status(404).json({ message: 'Account not found' });
        res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
