const ResuableItem = ({pimg, pname, pprice}) => {
    return(
        <div>
            <div>
                <img className="h-[310px] w-[320px] " src={pimg}></img>
            </div>
            <div className="text-signin text-sm">Giftcard</div>
            <div className="text-white text-[25px]">{pname}</div>
            <div className="text-white text-sm">NRP {pprice}</div>
        </div>
    )
}

export default ResuableItem