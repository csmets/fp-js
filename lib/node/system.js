/*
 * @Author Clyde Smets | clyde.smets@gmail.com
 *
 * @Desc
 * System functions to allow for creation of files and directories
 *
 * @Last edited
 * 11-12-16
 */

const fs = require('fs')

let callback = (callback, result) => {
    if (callback === undefined || typeof callback !== 'function') {
        return result
    } else {
        return callback(result)
    }
}

let writeFile = (file, content) => {
    fs.writeFile(file, content, (err) => {
        if (err) throw err
        return true
    })
}

let createFolder = (folder, chmod = 0744, cb) => {
    fs.mkdir(folder, chmod, (err) => {
        if (err) throw err
        return callback(cb, true)
    })
}

//Takes an array argument to create multiple folders recursively
let createFolderP = (paths) => {
    return Promise.resolve(
        paths.reduce((path, dir) => {
            createFolderPath = path + '/' + dir
            createFolder(createFolderPath)
            return createFolderPath
        }, '.')
    )
}

let readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err)
                reject(err)
            else
                resolve(data)
        })
    })
}

let splitPaths = (path) => {
    return path.split('/')
}

let basename = (path, cb) => {
    return callback(cb, path.split(/[\\/]/).pop())
}

module.exports = {
    writeFile,
    readFile,
    createFolder,
    splitPaths,
    basename,
    createFolderP
}
