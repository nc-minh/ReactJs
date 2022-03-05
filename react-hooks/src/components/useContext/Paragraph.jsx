import { useContext } from 'react'
import { ThemeContext } from './Main'
function Paragraph(){

    const theme = useContext(ThemeContext)
    return(
        <div>
            <p className={theme}>
                Tôi yêu em là một trong những bài thơ tình nổi tiếng của A.X. 
                Pu-skin, được khơi nguồn từ mối tình của nhà thơ với A.A. Ô-lê-nhi-na 
                (con gái của A.N. Ô-lê-nhin, Chủ tịch Viện Hàn lâm nghệ thuật Nga) - người mà mùa hè năm 1829 A.x. 
                Pu-skin đã cầu hôn nhưng không được chấp nhận.
            </p>
        </div>
    )
}

export default Paragraph