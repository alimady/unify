
import { NavBotton } from "../paginator/Paginator.styles"
type PageButtonProps={
    pg:number,
    setPage:React.Dispatch<React.SetStateAction<number>>
}
const PageButton = ({ pg, setPage }:PageButtonProps) => {
    return <NavBotton onClick={() => setPage(pg)}>{pg}</NavBotton>
}

export default PageButton