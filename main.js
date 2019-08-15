//get modules
const electron = require('electron');
const { app, BrowserWindow } = require('electron');

//create main window
let window

function createWindow () {
    //window parameters
    window = new BrowserWindow({
        width: 600,
        height: 800
    })

    window.loadFile('main.html');

    //window closy bit
    window.on('closed', () => {
        window = null;
    })

}

//when npm is ready to do stuff
app.on('ready', createWindow)

//auto quit if all windows are closed
app.on('windows-all-closed', () => {
    
    //if you arent on mac, actually quit the program
    if(process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if(window === null) {
        createWindow();
    }
})

var display_string = "";