import React from 'react';
import useTitle from '../../Hooks/TitleNavigate';

const FAQ = () => {
    useTitle('Faq')

    // const FaqData = [
    //     {
    //         id: 1,
    //         name: 'What is SalafiahayNikah.com? How does it work?',
    //         description: "SalafiahayNikah.com is a Bangladeshi Islamic Matrimony website. It started its journey on January 1, 2023. In the website someone can find biodata of Upazila-based practicing Muslim brides and grooms and also makes contact with the guardians of them. At the same time, brides and grooms can create and submit biodata on the website if they want.",
    //     }
    // ]

    return (
        <div className='w-3/4 mx-auto my-10'>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    What is SalafiahayNikah.com? How does it work?
                </div>
                <div className="collapse-content">
                    <p>SalafiahayNikah.com is a Bangladeshi Islamic Matrimony website. It started its journey on January 1, 2023. In the website someone can find biodata of Upazila-based practicing Muslim brides and grooms and also makes contact with the guardians of them. At the same time, brides and grooms can create and submit biodata on the website if they want.</p>
                </div>
            </div>

            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Is this website open to everyone?
                </div>
                <div className="collapse-content">
                    <p>No, this website is not open to everyone, only for practicing Muslims.</p>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Are there any special requirements for making biodata?
                </div>
                <div className="collapse-content">
                    <p><strong>For Men:</strong>
                        <ol>  i) It is obligatory to pray five times a day.<br />
                            ii) Keeping wajib beard maintaining sunnah.<br />
                            iii) Not letting the garment hang down below the ankles.<br />
                            iv) Parental permission is obligatory .</ol><br />

                        <strong>For Women:</strong>
                        <ol>  i) It is mandatory to pray five times a day.<br />
                            ii) Must be veiled including ‘Niqab’ following the creed of ‘Ahlus Sunnah Wal Jamaah’<br />
                            iii) It is a must to take parental permission.</ol>
                    </p>
                </div>
            </div>

            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    How much does it cost to submit biodata?
                </div>
                <div className="collapse-content">
                    <p>Biodata can be submitted to SalafiahayNikah.com completely free.</p>
                </div>
            </div>

            <div tabIndex={4} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    How confidential will my information be when I submit my biodata to SalafiahayNikah.com? How much will be published?
                </div>
                <div className="collapse-content">
                    <p>Your and your parents’ name, mobile number and email address will be kept confidential after your biodata is approved. All other information can be seen by general users. That is, common users can read your biodata but not know your identity.<br /><br />

                        If someone is interested to come in contact with you for marriage, then by using “Connection,” he or she will be able to see your name, parents’ mobile number and email address and can make consultation for wedding.
                        <br /><br />

                        Note: Read ‘Privacy Policy’ for details.</p>
                </div>
            </div>

            <div tabIndex={5} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    My resume is not approved because of some wrong information. Will I be able to submit my resume again?
                </div>
                <div className="collapse-content">
                    <p>Yes, you can do that. If you submit your resume after correcting the wrong information you wrote in the box earlier, your corrected resume will be approved again In sha Allah. However, if the resume is not approved due to not following the rules of OrdhekDeen.com, then it will not be approved.</p>
                </div>
            </div>

            <div tabIndex={6} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Can I upload my biodata if I do not keep beard following sunnah in spite of being a regular performer of saying prayer (Salah) five times a day?
                </div>
                <div className="collapse-content">
                    <p>Your biodata will not be approved. Only those who are keeping wajib beard are allowed to submit their biodatas. (Except the persons whose beard is not grown due to natural causes)
                    </p>
                </div>
            </div>

            <div tabIndex={7} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Why is my biodata not approved?
                </div>
                <div className="collapse-content">
                    <p><strong>Biodata is not approved for various reasons. A few clarifications are mentioned below:</strong>
                        <ol> i) If biodata is submitted on our website without informing the parents.<br />
                            ii) If you write your mobile number in the parents’ number box.<br />
                            iii) If you do not pray five times a day regularly.<br />
                            iv)  If wazib beard is not kept maintaining sunnah (Except those whose beard is not grown due to natural causes)<br />
                            v) For men, if the garment is not worn on the ankles.<br />
                            vi) In case of women, if they are not veiled including ‘niqab’<br />
                            vii) If any false information is given in the biodata.<br />
                            viii) If the answer to the specific question is given in a different way without giving a clear reply. For example, many people write “Alhamdulillah” or “Hum” etc. But “Yes/No” is not clearly understood by it.<br />
                            ix) If something that goes against Islam is written</ol>
                    </p>
                </div>
            </div>

            <div tabIndex={8} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Could I interact with someone directly if his or her biodata is chosen by me?
                </div>
                <div className="collapse-content">
                    <p>SalafiahayNikah.com does not support the direct communication with brides or grooms. The connection with only guardians of brides or grooms is permitted.</p>
                </div>
            </div>

            <div tabIndex={9} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    I perform salah five times a day and wear ‘Burqua or Hijab’ but do not wear ‘Niqab’. Will I be able to upload my biodata?
                </div>
                <div className="collapse-content">
                    <p>Your biodata will not be accepted. Only those who maintain veiling(Fard) including ‘Niqab’ are allowed to submit their biodata for approval.</p>
                </div>
            </div>

            <div tabIndex={10} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Can I submit my biodata without taking consent of my guardian?
                </div>
                <div className="collapse-content">
                    <p>This is a must to take consent of your guardian if you are eager to upload your biodata in our website. Otherwise, your biodata will not be favored.</p>
                </div>
            </div>

            <div tabIndex={11} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Can I upload my biodata while I am a student having no income yet?
                </div>
                <div className="collapse-content">
                    <p>Yes, you can upload your biodata and for this, you must take the approval of your guardian.</p>
                </div>
            </div>

            <div tabIndex={12} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Can I delete my biodata after I get married or for other reasons?
                </div>
                <div className="collapse-content">
                    <p>Yes, you can delete biodata whenever you want.</p>
                </div>
            </div>

            <div tabIndex={13} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Can someone else create one’s biodata?
                </div>
                <div className="collapse-content">
                    <p>In our Biodata Form there are many personal questions, the answers to which only the bride/groom knows best.  If someone else has created the resume, the answers to those questions may appear correct, but some errors may remain.  That is why, the condition that the bride/groom has to write is necessary.</p>
                </div>
            </div>

            <div tabIndex={14} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    I am not skilled in using internet. How can I create biodata?
                </div>
                <div className="collapse-content">
                    <p>In this respect you can create your biodata answering the questions mentioned in the Biodata Form by taking the assistance of an expert internet operator.</p>
                </div>
            </div>

            <div tabIndex={15} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Are there any postmarital service charges if I get married through SalafiahayNikah.com website?
                </div>
                <div className="collapse-content">
                    <p>No, you need not pay any postmarital service charges after you get married through this site.</p>
                </div>
            </div>

            <div tabIndex={15} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title font-medium">
                    Can I upload my biodata if I am not a Bangladeshi citizen?
                </div>
                <div className="collapse-content">
                    <p>No, you cannot upload your biodata. SalafiahayNikah.com is basically operating its services in only Bangladesh.  Citizens except Bangladesh are not able to be benefitted with the services of SalafiahayNikah.com.</p>
                </div>
            </div>



        </div>
    );
};

export default FAQ;