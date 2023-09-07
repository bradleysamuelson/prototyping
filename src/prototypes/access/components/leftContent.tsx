import React from 'react';
import { Button, ButtonTheme } from '@preamp/core';
import { Signal } from '@preamp/signal';
import { dataIcon } from '../data-icon';
import { VideoAmp } from '../../../components/icons/videoamp';
import cx from 'classnames';



interface LeftContentProps {
    createStep: number;
    dataType: string | null;
} 

export const  LeftContent: React.FC<LeftContentProps> = ({
    createStep, dataType
}:LeftContentProps): React.ReactElement<HTMLDivElement> => {
    // const [currentStep, setCurrentStep] = React.useState<string | null>(localStorage.getItem('dataType'));
    const [helpOpen, setHelpOpen] = React.useState<boolean>(true);
    const onHelpToggle = (): void => {
        setHelpOpen(!helpOpen);
    }
    return (
        <>
            <div className="va-logo-easy-left">
                <VideoAmp />
            </div>
            <div className="easy-left-content">
                <div className="onboard-data"><Signal icon={dataIcon} /> <span>Onboard Data</span></div>
                {createStep===1 && (
                    <h1>What type of data do you want to create?</h1>
                )}
                {/* Pixels */}
                {dataType==='pixels' && (
                    <>
                        
                        {createStep===2 && (
                            <h1>What are the details for this Pixel?</h1>
                        )}
                        {createStep===3 && (
                                <h1>What type of event is this Pixel for?</h1>
                        )}
                        {createStep===4 && (
                                <h1>Do you want to choose a Creative Ad Server?</h1>
                        )}
                        {createStep===5 && (
                            <h1>Which tracking Platform does this Pixel use?</h1>
                        )}
                        {createStep===6 && (
                            <h1>Set up your optional Macros</h1>
                        )}
                        {createStep===7 && (
                            <>
                                <h1>How does everything check out?</h1>
                                <p className="u-title-4 u-font-medium mb-2">So easy right?</p>
                                <p className="u-body-1">Next time test out your skills with <strong>Expert Mode</strong></p>
                            </>
                        )}
                        <div className={cx("help-content", {'help-content-open': helpOpen})}>
                            {createStep === 2 && (
                                <>
                                <h2>What is the best way to name your Pixel?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 3 && (
                                <>
                                <h2>What are Pixel events?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 4 && (
                                <>
                                <h2>Why is selecting a Creative Ad Server important?</h2>
                                <p>Ad Servers are Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 5 && (
                                <>
                                <h2>What is a tracking Platform?</h2>
                                <p>Tracking Platforms are Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 6 && (
                                <>
                                <h2>What are Macros and how can I use them?</h2>
                                <p>Macros are Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                        </div>
                        {createStep != 7 && (
                            <Button onClick={onHelpToggle} theme={ButtonTheme.Link}>
                                {!helpOpen && <span>Need Help?</span>}
                                {helpOpen && <span>Hide Help</span>}
                            </Button>
                        
                        )}
                    </>
                )} 
                {/* End Pixels */}

                {/* Creatives */}
                {/* Pixels */}
                {dataType==='creatives' && (
                    <>
                        
                        {createStep===2 && (
                            <h1>What are the details for this Creative?</h1>
                        )}
                        {createStep===3 && (
                                <h1>Who has access to this Creative?</h1>
                        )}
                        {createStep===4 && (
                                <h1>Upload your file.</h1>
                        )}
                        {createStep===5 && (
                            <>
                                <h1>How does everything check out?</h1>
                                <p className="u-title-4 u-font-medium mb-2">So easy right?</p>
                                <p className="u-body-1">Next time test out your skills with <strong>Expert Mode</strong></p>
                            </>
                        )}
                        <div className={cx("help-content", {'help-content-open': helpOpen})}>
                            {createStep === 2 && (
                                <>
                                <h2>What is the best way to name your Creative?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 3 && (
                                <>
                                <h2>What can people with access do with this creative?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                            {createStep === 4 && (
                                <>
                                <h2>What file formats can I upload?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at congue magna. Ut sit amet semper quam, id pellentesque lacus. Nam et congue ipsum, quis sodales mi. </p>
                                <p>Quisque venenatis consequat augue ac pellentesque. Morbi eget ornare quam. Donec ut scelerisque odio, id scelerisque urna. Nunc ultrices, quam vel venenatis imperdiet, tellus leo ullamcorper sapien, ac mollis dui enim a nulla. Cras in scelerisque odio. Vivamus quis scelerisque sem. Donec tristique turpis eget egestas rutrum</p>
                                </>
                            )}
                        </div>
                        {createStep != 5 && (
                            <Button onClick={onHelpToggle} theme={ButtonTheme.Link}>
                                {!helpOpen && <span>Need Help?</span>}
                                {helpOpen && <span>Hide Help</span>}
                            </Button>
                        
                        )}
                    </>
                )} 
                {/* End Creatives */}

            </div>

        </>
    );
};