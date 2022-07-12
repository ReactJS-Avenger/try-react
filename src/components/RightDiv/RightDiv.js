
import mpage_logo from '../../images/mpages_logo.svg';
import company_logo from '../../images/company-logo.jpg';
import teams_logo from '../../images/teams-logo.svg'
import { MpagesTeamsLink } from '../../Utils/Tools';

const RightDiv = () => {
    return (
        <div className="right-div">
            <main className="right-div-main">
                <div className="team-logo">
                    <img src={mpage_logo} alt='mpage-logo'/>
                </div>
                <div className="team-name">
                    Welcome on Board MPages
                </div>
            </main>
            <div className='connect-us'>
                <button onClick={() => window.open(MpagesTeamsLink)}>
                    <img src={teams_logo} alt='teams-logo'/>
                    <span className='connect-us-text'>Connect Us</span>
                </button>
            </div>
            <footer className="footer">
                <img src={company_logo} alt='company-logo'/>
                <span className='initiative-project'>Initiative Project By MPages</span>
                <span className='copyright-text'>Copyright © 2022 Oracle. All rights reserved</span>
            </footer>
        </div>
    )
}
export default RightDiv;