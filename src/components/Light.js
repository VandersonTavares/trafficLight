function Light( {cor, acesa, setAcesa} ){
    return(
        <div className="light" style={{backgroundColor: cor === acesa ? cor: "gray"}} onClick={() => setAcesa(cor)}></div>
    )
}
export default Light