const BusinessProcess = () => {
    const phases = {
        display: "grid",
        gridTemplateColumns: "30% 70%"
    };

    return (
        <div>
            <h2>Process</h2>
            <div style={phases}>
                <h2> Discovery and Assessment</h2>
                <p>
                    We begin by understanding your business
                    needs and current IT environment. This includes reviewing your
                    hardware, software, network, and security to identify any issues or
                    gaps. This phase helps us tailor the right solutions specifically for
                    you.
                </p>
                <h2>Onboarding and Setup and Maintenance</h2>
                <div>
                    <p>
                        Next, we implement the agreed-upon IT tools
                        and services, such as remote monitoring, backup systems, and security
                        measures. We also set up access and communication channels so you can
                        easily reach support whenever needed.
                    </p>
                    <p> Once everything is set up, we continuously monitor your IT
                        systems remotely to detect and fix problems before they affect your
                        business. Regular updates, patching, and backups happen automatically
                        to keep your infrastructure secure and reliable.</p>
                </div>
                <h2>Support, Strategic IT Planning and Growth</h2>
                <div>
                    <p>
                        If you encounter any IT problems, you
                        can contact us for fast, expert support. We troubleshoot and resolve
                        issues remotely or onsite as needed, minimizing downtime and keeping
                        your business running smoothly.
                    </p>
                    <p>
                        Beyond day-to-day support, we help you plan for future technology
                        needs, recommending upgrades or new solutions that align with your
                        business goals. This ensures your IT environment scales with your
                        growth.</p>
                </div>
            </div>
        </div>
    )
}

export default BusinessProcess