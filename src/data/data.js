import data from '../../dc-comics.json' assert { type: 'JSON' };

const comicsData = data;
const navLinks = [
    {
        text: 'Characters',
        url: '#',
        status: false
    },
    {
        text: 'Comics',
        url: '#',
        status: true
    },
    {
        text: 'Movies',
        url: '#',
        status: false
    },
    {
        text: 'TV',
        url: '#',
        status: false
    },
    {
        text: 'Games',
        url: '#',
        status: false
    },
    {
        text: 'Collectibles',
        url: '#',
        status: false
    },
    {
        text: 'Videos',
        url: '#',
        status: false
    },
    {
        text: 'Fans',
        url: '#',
        status: false
    },
    {
        text: 'News',
        url: '#',
        status: false
    },
    {
        text: 'Shop',
        url: '#',
        status: false
    },
];

export {navLinks, comicsData}