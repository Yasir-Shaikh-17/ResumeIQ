const mongoose = require("mongoose")

const tokenBlackListSchema = new mongoose.Schema({
    token:{
        type: String,
        required: [true, "Token is required to be added in black list"]
    }
})

const tokenBlackListModel = mongoose.model("blacklistTokens", tokenBlackListSchema)

module.exports = tokenBlackListModel