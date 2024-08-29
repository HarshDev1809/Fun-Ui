import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    rotated : {
        transform: "rotate(90deg)",
    },

    sandWatchLoader : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    }
})

export default useStyle;