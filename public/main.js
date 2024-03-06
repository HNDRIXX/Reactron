const http = require('http')
const fs = require('fs')
const path = require('path')
const {app, BrowserWindow, protocol} = require('electron')

require('@electron/remote/main').initialize()

let win

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        //     nodeIntegration: true,
        //     enableRemoteModule: true
        // },
        icon: __dirname + '/favicon.ico',
    })

    win.maximize()
    win.setMenuBarVisibility(false)

    const appURL = app.isPackaged
        ? url.format({
            pathname: path.join(__dirname, "/index.html"),
            protocol: "file:",
            slashes: true,
        })
        : "http://localhost:3000";

    win.loadURL(appURL)
    win.webContents.on('did-fail-load' , () => {
        win.loadURL(appURL)
    })
}

app.on('ready', () => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})