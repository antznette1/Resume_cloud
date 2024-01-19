document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: '10/2023 - Current',
        title: 'AWS Re/Start | Code Black Female',
        description:`Completed AWS Restart program, gaining hands-on experience in cloud computing.
        Earned AWS Certified Solutions Architect certification in January 2024.
        Implemented a dynamic and responsive resume website using AWS services. Utilized AWS Lambda, Amazon Route 53, Amazon S3, AWS CloudFront, and AWS WAF. Configured IAM roles for secure access.
        Designed and implemented a scalable architecture on AWS. Used EC2 instances, Amazon RDS, Elastic Load Balancing, and Auto Scaling Groups (ASG) for performance and availability.
        Hosted a static website on Amazon S3. Configured CloudFront for efficient content delivery.`
    },
    {
        date: '10/2023 - Current',
        title: 'Senior Insight Analyst | RedEye International',
        description:`Masterfully utilized R and Oracle SQL to dissect vast datasets, leading to the development of predictive models that informed merchandising strategies and drove a 16% increase in sales for key retail clients.
            Collaborated with marketing teams, harnessing ThoughtSpot for digital campaign analysis. Insights derived led to a 30% improvement in both online and in-store campaign outcomes.
            Pioneered segmentation and RFM (Recency, Frequency, Monetary) models, resulting in personalized marketing campaigns that boosted customer retention by 20% and increased average customer lifetime value.
            Managed data architecture on Amazon Redshift, optimizing processes that cut down data retrieval times by 20% during critical retail decision moments.
            Directed comprehensive digital analysis for e-commerce platforms, identifying user behaviors and preferences, which culminated in a 15% rise in online conversions and a 22% enhancement in average cart values.
            Championed data integrity with stringent validation protocols, earning trust and ensuring reliability in insights, as evidenced by an 18% uptick in contract renewals from major retail clients.
            Managed data architecture on Amazon Redshift, optimizing processes and achieving a 20% reduction in data retrieval times.`
    },
    {
       date: '11/2022 – 09/2023',
        title: 'Senior Insight Analyst | Talk Talk Mobile Phone Services',
        description: `Led comprehensive data analysis on a monthly basis for 50 stores, extracting valuable insights to inform impactful marketing and product strategies; doubled average conversion rate and achieved a remarkable 30% reduction in drop-off rate.
        Orchestrated a data-backed pricing experiment, driving a noteworthy 25% enhancement in customer value by tailoring pricing strategies, resulting in increased revenue and customer loyalty.
        Pioneered the development of data-driven strategies, streamlining resource allocation and reducing operational costs by 15%, resulting in annual savings of $750k and enabling the team to exceed target goals.
        Identified and improved specific procedural areas of an existing retention program to enhance profitability through comprehensive analysis of customer data using SQL; achieved an exceptional 8% increase in profitability.
        Communicated complex data and technical concepts to non-technical stakeholders through clear, concise reports and presentations.
        Implemented cutting-edge design principles and streamlined procedures for metrics reports, resulting in a 40% increase in report readability and user engagement, while reducing errors by 20%.
        Launched a comprehensive coaching program for a team of 5 junior analysts, accelerating professional growth and resulting in two team members achieving promotions six months ahead of schedule.
        Led the delivery of 10 on-going and 5 additional research and market analysis projects, providing valuable insights to key stakeholders.
        Developed a customer lifetime value (CLV) model, enabling targeted resource allocation and generating a 20% boost in revenue from high-value segments, equivalent to £3 million annually.`
    },
    {
         date: '02/2015 – 02/2022',
        title: 'Customer Relationship Analyst | Sterling Bank',
        description: `Spearheaded a comprehensive analysis of operational workflows, identifying key areas for improvement and implementing automation tools that reduced processing time by 30%.
        Employed rigorous statistical analyses, including hypothesis testing, to validate data integrity and ensure reliable interpretations, empowering stakeholders to make informed decisions and achieve a 15% reduction in error rates.
        Defined and tracked web property KPIs with the executive team, leading to a 50% increase in visitor counts annually; used SQL and Google Sheets expertise to collect, analyze, and present data for informed decision-making.
        Introduced a comprehensive learning program, including online courses and workshops, that enhanced team members' technical skills, leading to a 30% reduction in software development errors and a 25% increase in project delivery efficiency.
        Analyzed customer conversion issues, providing in-depth root cause analysis reports that led to key insights and a remarkable 32% increase in conversion rates within the e-commerce platform.
        Designed and deployed clear and concise data visualizations and dashboards that communicated complex data, resulting in a 30% decrease in time spent analyzing data and a 20% increase in stakeholder engagement.`
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});

// Wrap your code in an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the counter element
    const counter = document.querySelector(".counter-value");

    async function updateCounter() {
        try {
            let response = await fetch("https://4sbzwjxvcsrjcqff6obu4esqau0gbhtx.lambda-url.us-east-1.on.aws/");
            let data = await response.json();

            console.log("Response from Lambda:", data);

            // Convert the views to a number
            const viewsCount = parseInt(data.views, 10);

            // Check if the counter element is found
            if (counter) {
                counter.textContent = viewsCount;
            } else {
                console.error("Counter element not found.");
            }
        } catch (error) {
            console.error("Error updating counter:", error);
        }
    }

    // Call the updateCounter function
    updateCounter();
});


