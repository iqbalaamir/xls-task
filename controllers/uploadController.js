const fs = require('fs');
const csv = require('fast-csv');
const mongoose = require('mongoose');

const Agent = require('../models/Agent');
const User = require('../models/User');
const Account = require('../models/Account');
const Policy = require('../models/Policy');

const uploadCSV = async (req, res) => {
    try {
        if (!req.file) return res.status(400).send('No file uploaded');

        fs.createReadStream(req.file.path)
            .pipe(csv.parse({ headers: true }))
            .on('data', async (row) => {
                // Save agent
                const agent = await Agent.create({
                    agent: row.agent,
                    userType: row.userType,
                    producer: row.producer,
                });

                // Save user
                const user = await User.create({
                    agentId: agent._id,
                    gender: row.gender,
                    firstname: row.firstname,
                    email: row.email,
                    city: row.city,
                    phone: row.phone,
                    address: row.address,
                    state: row.state,
                    zip: row.zip,
                    dob: row.dob,
                    primary: row.primary,
                    applicantId: row.applicantId
                });

                // Save account
                const account = await Account.create({
                    userId: user._id,
                    account_name: row.account_name,
                    account_type: row.account_type,
                });

                // Save policy
                const policy = await Policy.create({
                    accountId: account._id,
                    policy_mode: row.policy_mode,
                    policy_number: row.policy_number,
                    premium_amount_written: row.premium_amount_written,
                    premium_amount: row.premium_amount,
                    policy_type: row.policy_type,
                    company_name: row.company_name,
                    category_name: row.category_name,
                    policy_start_date: row.policy_start_date,
                    policy_end_date: row.policy_end_date,
                    csr: row.csr,
                    agency_id: row.agency_id,
                    hasActive_ClientPolicy: row.hasActive_ClientPolicy
                });

            })
            .on('end', () => {
                return res.status(200).send('File has been processed');
            });

    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

module.exports = { uploadCSV };
