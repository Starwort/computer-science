---
layout: default
title: Client Server And Peer To Peer | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.4 "make back URLs relative" ⓒ Starwort, 2020
has_back: true
back_link: ./Paper_1/section_3/chapter_3
back_text: Back to Chapter 3
---

# Client-server and Peer-to-Peer exercises

01. Explain the difference between client-server and P2P networking, and give an example of where each might be used

    Client-server networking is a network model where many users (the 'clients') connect to a central server to use the network; the server is the absolute source of truth. For example, the worldwide web uses a client-server model, as each individual webpage is provided by a single entity (one conceptual server, although multiple servers may be used in practice).

    Peer-to-peer networking, on the other hand, is a network model where all the users (the 'peers') connect to each other to use the network; each individual user is a source of truth. For example torrents use a peer-to-peer model - downloading a torrent uses many other users to download small parts of the torrent to decrease download times
02. A travel agency is planning to install a new computer system based on the client-server model, for its agents to use for flight and hotel bookings and enquiries at multiple workstations.
    01. What is meant by the client-server model?

        The client-server model is a way of arranging a network so that a central server governs all processing, and many clients can request this processing.
    02. After some consideration, the company has decided to use a thin-client network. Explain how thin-client networks operate.

        Thin-client networks use 'dumb terminals'; each client does almost no work and just submits jobs for the server to handle.

        The clients work by requesting information from the server, then submitting a request for processing using that data to the server.

        Each client does very little work, instead depending on the server to do it.
    03. How would the decision to use a thin-client network rather than a thick-client network affect the choice of hardware?

        Using a thin-client network rather than a thick-client network means that each client computer can be very cheap; it only needs enough processing power to connect to the server.

        However, the central server needs to be very powerful as it will have to process every request from every client.
