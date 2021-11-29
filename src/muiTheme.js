export const themeObject = (
    {
        palette: {
            primary: {
                main: '#C64033',
            },
            secondary: {
                main: '#ffb74d',
            },
        },
        typography: {
            fontFamily: [
                'Oswald',
                'Arial'
            ].join(',')
        }
    }

)

export const paperTransitionStyle = {
    transition: "all .4s ease-in-out",
    "&:hover": {
        backgroundColor: "#ef5350",
        color: 'white'
    }
}