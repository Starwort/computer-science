---
layout: default
title: Server And Client Side Processing | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.3 "add tag to make &lt;base&gt; work" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Chapter 4
---

# Server and Client Side Processing

01. A company is designing a website which will allow its customer to place orders online. The individual web pages that describe each product will be generated dynamically using server-side scripting.

    Explain what a server-side script is.

    Server-side scripts are programs which run on the server in order to prepare a webpage for the end user. When a page is requested, the script runs and generates the response dynamically.
02. A website is set up to enable users to access on-demand television programs. Users can sign up to the website and download a recent series episode or film. Programs are downloaded and stored on the user's device. When others choose to download the same program, parts of the program data may come from multiple devices belonging to other users.
    01. State what this model of network is called.

        Peer-to-peer
    02. &#x200b;
        01. Give **one** advantage to the company of this model.

            Their server does not need to serve as much data to the users
        02. Give **one** advantage to the user of this model.

            The program will download faster
    03. Javascript is used to validate that the user's email address is in the valid format when an account is made.
        01. Give **two** advantages of client-side validation
            - The user gets feedback on their input immediately, rather than needing to send the data first
            - Most requests sent to the server will not be malformed as a result of the validation
        02. Client-side and server-side validation should happen in partnership. Explain why it is important to validate the email address again once it reaches the server.

            Even though the email is validated on the client's computer, it should be validated on the server as malicious actors, or users with JavaScript disabled, can bypass the client-side validation and submit malformed data, which the server must be able to handle without error.
