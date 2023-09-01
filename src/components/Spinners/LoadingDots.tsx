import { ThreeDots } from  'react-loader-spinner'


function LoadingDots () {

return  (

    <ThreeDots 
        height="auto" 
        width="80" 
        radius="9"
        color="#808080" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
        />

    )
    }

export default LoadingDots