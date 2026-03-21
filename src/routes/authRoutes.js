const express = require("express")
const router = express.Router()
const authUrl = "/auth"
const { addUser } = require("../service/authService")
const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

