const http = require('http')
const fs = require('fs')
const path = require('path')
const {app, BrowserWindow, protocol} = require('electron')

require('@electron/remote/main').initialize()

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        icon: __dirname + '/favicon.ico',
    })

    win.maximize()
    win.setMenuBarVisibility(false)
    win.loadURL('http://localhost:3000')
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