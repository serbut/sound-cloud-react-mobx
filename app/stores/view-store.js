import { extendObservable } from 'mobx';

class ViewState {
    constructor() {
        extendObservable(this, {
            title: '',
            playlistOpen: false,
            volumeControlOpen: false,
            drawerOpen: false,
        });

        window.addEventListener('click', () => (this.playlistOpen = false));
    }

    togglePlaylist() {
        this.playlistOpen = !this.playlistOpen;
    }

    toggleDrawer() {
        this.drawerOpen = !this.drawerOpen;
    }
}

export default new ViewState();
