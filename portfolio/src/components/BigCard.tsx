import CardTitle from "./card-components/CardTitle"
import Description from "./card-components/Description"
import GitHubIcon from "./icons/GitHubIcon"
import './card.css'

export default function BigCard(){


    return(
        <div className="row">
            <div className='big-card col-5'>
                <div className="row">
                    <CardTitle
                            title="Mu Ratas"
                        />
                    <GitHubIcon
                            width="60px"
                            height="60px"
                            color="pink"
                        />
                </div>

            <Description>
                Project which allows to find perfect bikecycle faster on estonian market.
            </Description>
            <p>links</p>
        </div>
        <div className='big-card col-5 right'>
            <CardTitle
                    title="Mu Ratas"
                />
            <Description>
                Project which allows to find perfect bikecycle faster on estonian market.
            </Description>
            <p>links</p>
        </div>

     
        </div>

    )
}