import "./MainPage.css"

function LoadingPage(props) {
    return (
      <>
        <div className="page-center">
          <img src={`${process.env.PUBLIC_URL}/LDT_GRAF_2.png`} alt="logo" width="500" height="auto" />
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column">
              <div className="text-center">
                <div className="spinner-border" role="status"></div>
                <h4 className="sr-only">Loading...</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default LoadingPage