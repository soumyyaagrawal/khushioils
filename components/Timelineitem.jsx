import PropTypes from 'prop-types';
import Image from 'next/image';

const Timelineitem = (props) => {
return (
    <div className={`timeline-item ti-${props.number}`}>
        <div className="timeline-left">
            <div className={`sticky-text-left timeline-trigger-${props.number}`}>
                {/* <div className="timeline-step-number-text">{props.step}</div> */}
                <div className="timeline-step-number">{props.number}</div>
            </div>
        </div>

        <div className="timeline-center">
            <div className="timeline-arrow">
                <Image src="/ProgressBar/report.png" alt="progress report icon" width={48} height={48} />
            </div>
        </div>

        <div className="timeline-right">
            <div className="timeline-heading">
                <div>{props.heading}</div>
            </div>
            <div className="timeline-image">
                <div className="timeline-image-div">
                    <Image src={props.image} alt={props.heading} width={400} height={300} />
                </div>
            </div>
            <div className="timeline-description">
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    </div>
);
}

Timelineitem.propTypes = {
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // step: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Timelineitem;