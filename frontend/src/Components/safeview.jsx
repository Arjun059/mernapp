const SafeView = function() {
    return <div>
        <div className="d-md-none" style={{height: "100px"}}></div>
        <div className="d-none d-md-block" style={{height: "75px"}}></div>
    </div>   
}
export default SafeView;