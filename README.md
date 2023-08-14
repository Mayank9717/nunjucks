# nunjucks

TASK 3
**Approach to Solving the Issue:**

1. **Task Priority Assessment:** Evaluate the priority and impact of both tasks. Since Task 2 is for a priority customer with a tight go-live timeline, it becomes critical to address their needs promptly. Task 1, being for a low-priority customer without a specified go-live date, can be potentially delayed.

2. **Cross-Functional Collaboration:** Engage with relevant stakeholders, including the account managers (Manoj and Ravi) and the team leads, to discuss the situation and potential solutions. Collaboratively decide on the best course of action.

3. **Extension Request:** Request an extension for Task 1 from the low-priority customer, explaining the situation and providing a revised timeline. This will allow more time to focus on completing Task 2 within its critical deadline.

4. **Resource Allocation:** If possible, allocate additional resources or redistribute workload within the team to ensure Task 2's completion on time. This could involve temporarily shifting team members from lower-priority projects to Task 2.

5. **Communication:** Communicate transparently with all stakeholders about the situation, the steps being taken, and the revised timeline for both tasks.

**Internal Message to Manoj (Account Manager for Task 1):**

Subject: **Important: Task 1 Deadline Extension Request**

Dear Manoj,

I hope this message finds you well. I wanted to inform you about an unforeseen situation that has arisen. Due to a family emergency, I won't be able to meet the original due date for Task 1. I understand the importance of this task, and I want to ensure that we provide the best possible outcome.

To mitigate any impact, I plan to request a short extension from the customer for Task 1. Since they haven't specified a go-live date, I believe this adjustment would be reasonable. This will allow me to focus on completing Task 2, which has a more imminent go-live requirement.

Rest assured, I will keep you updated on the progress and any developments regarding Task 1. Your understanding and support during this time are greatly appreciated.

Best regards,
Mayank Porwal

**Internal Message to Ravi (Account Manager for Task 2):**

Subject: **Urgent: Update on Task 2 Go-Live Timeline**

Dear Ravi,

I hope you're doing well. I wanted to bring to your attention a situation that has arisen. Due to an unexpected family emergency, there will be a delay of approximately 3 days in completing Task 2. I understand the urgency of this task, and I want to assure you that I am actively working on a solution.

To ensure we meet the revised deadline, I have taken steps to prioritize Task 2 by temporarily reallocating resources within the team. Our goal remains to deliver the best possible outcome for the upcoming campaign.

I will keep you updated on our progress and any further developments. Your support and understanding during this time are invaluable.

Thank you,
Mayank Porwal

**Customer Email Communication:**

Subject: **Important Update: Revised Timeline for Your Project**

Dear [Customer's Name],

I hope this email finds you well. I wanted to personally update you on the progress of your project and provide you with some important information.

Unfortunately, an unexpected family emergency has arisen, which has temporarily impacted our ability to meet the original timeline for your project. I sincerely apologize for any inconvenience this may cause you.

I want to assure you that we are fully committed to delivering the highest quality results for your project. In light of the situation, I would like to request a brief extension of approximately 3 days for the completion of the project. This will allow us to ensure that every detail is attended to and that your project receives the attention it deserves.

Your understanding and flexibility during this challenging time would mean a lot to us. We greatly value your partnership and are dedicated to exceeding your expectations.

If you have any questions or concerns, please don't hesitate to reach out to me directly. Thank you for your continued trust in us.

Best regards,
Mayank Porwal

TASK 4
I understand the tasks outlined in the Submission Guidelines and the Assessment Framework. Below, I will provide my approach and solutions for both Task 1: Onsite Survey and Task 2: Nunjucks.

**Assumptions and Data Sources:**

For Task 1, I assume that the provided PSDs contain the design and layout for the survey pages. I will use HTML, CSS, JavaScript, and jQuery for the survey implementation.

For Task 2, I assume the given JSON sample data is accurate, and I will use this data to fulfill the requirements.

**Task 1: Onsite Survey**

1. **Development of 2-Page Mobile Responsive Onsite Survey:**

I will create two HTML pages as described in the PSDs. The first page will capture the user's email address, mobile number, and country code. On the second page (thank you page), I will dynamically display the collected data.

2. **Implementation Steps:**

- Develop the first page using HTML, CSS, JavaScript, and jQuery based on the provided PSD design.
- Implement form validation for email and mobile number input fields.
- Using a Country dropdown library menu for country code options.
- On clicking the "TALK TO US" button, gather the input data and transfer it to the second page using JavaScript.
- Develop the second page with a thank you message and dynamically display the collected data which are  stored in session storage.

**Task 2: Nunjucks**

1. **Print Name, Username, Email for Even Ids or "I'm Odd" for Odd Ids:**

Loop through the provided JSON data and apply a conditional check to print the required information based on the even or odd id.

2. **Print Address Keys and Values for All Ids:**

Loop through the JSON data, access the address object for each entry, and print its keys and values.

3. **Print Name with Email for Emails Ending with .biz:**

Check each email in the JSON data and print the name along with the email value if the email ends with ".biz".

4. **Print City Name, Zipcode, and Geo for Specified Cities:**

Loop through the JSON data, check if the city name matches any of the specified cities, and print the requested information.

5. **Print Max 15 Characters of CatchPhrase:**

For each entry, print the first 15 characters of the CatchPhrase.

Please note that I have provided a simplified code outline for each task. The actual implementation may require more detailed coding, especially in the case of the Onsite Survey task, where you'll need to handle form submission and JavaScript logic.

Remember to create the necessary CSS and JS files and modify the file paths accordingly. For the Nunjucks implementation, you'll need to install a node modules file with the necessary Nunjucks syntax.

I will now provide the code implementations for both tasks 1 & 2
