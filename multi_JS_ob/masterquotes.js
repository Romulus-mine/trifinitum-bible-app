
        const masterQuotes = [
            { text: "Now that you know these things, you will be blessed if you do them.", author: "John 13:17(NIV)" },
            { text: "But be ye doers of the word, and not hearers only, deceiving your own selves.", author: "James 1:22(KJV)" },
            { text: "So Jesus was saying to those Jews who had believed Him, 'If you continue in My word, then you are truly My disciples; and you will know the truth, and the truth will set you free.'", author: "John 8:31-32(NASB)" },
            { text: "This is how we know that He lives in us, we know it by the Spirit He has given us.", author: "1 John 4:13(NIV)" },
            { text: "The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs—", author: "Romans 8:16-17(ESV)" },
			{ text: "However, you are not in the flesh but in the Spirit, if indeed the Spirit of God dwells in you. But if anyone does not have the Spirit of Christ, he does not belong to Him.", author: "Romans 8:9(NASB)" },
			{ text: "For we know, brothers loved by God, that he has chosen you, because our gospel came to you not simply with words, but also with power, with the Holy Spirit and with deep conviction.", author: "1 Thessalonians 1:4-5(NIV)" },
			{ text: "Every spirit that confesseth that Jesus Christ is come in the flesh is of God: And every spirit that confesseth not that Jesus Christ is come in the flesh is not of God", author: "1 John 4:2-3(KJV)" },
			{ text: "Do you not know that you are God's temple and that God's Spirit dwells in you? If anyone destroys God's temple, God will destroy him. For God's temple is holy, and you are that temple.", author: "1 Corinthians 3:16-17(ESV)" },
			{ text: "For no one can lay a foundation other than that which is laid, which is Jesus Christ.", author: "1 Corinthians 3:11(ESV)" },
			{ text: "Therefore, my brothers, be all the more eager to make your calling and election sure.", author: "2 Peter 1:10(NIV)" },
			{ text: "...each one's work will become manifest, for the Day will disclose it, because it will be revealed by fire, and the fire will test what sort of work each one has done.", author: "1 Corinthians 3:13(ESV)" },
			{ text: "Therefore I tell you that no one who is speaking by the Spirit of God says, 'Jesus be cursed,' and no one can say, 'Jesus is Lord,' except by the Holy Spirit.", author: "1 Corinthians 12:3(NIV)" },
			{ text: "Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.", author: "1 Corinthians 6:19-20(ESV)" },
			{ text: "What agreement has the temple of God with idols? For we are the temple of the living God;", author: "2 Corinthians 6:16(ESV)" },
			{ text: "For the word of God is living and active, and sharper than any two-edged sword..., even penetrating as far as the division of soul and spirit, of both joints and marrow...", author: "Hebrews 4:12(NASB)" },
			{ text: "By the grace God has given me, I laid a foundation as an expert builder, and someone else is building on it. But each one should be careful how he builds.", author: "1 Corinthians 3:10(NIV)" },
			{ text: "Your dead shall live; their bodies shall rise. You who dwell in the dust, awake and sing for joy! For your dew is a dew of light, and the earth will give birth to the dead.", author: "Isaiah 26:19(ESV)" },
			{ text: "Each one should test his own actions. Then he can take pride in himself, without comparing himself to somebody else,", author: "Galatians 6:4(NIV)" },
			{ text: "But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord.", author: "Philippians 3:7-8(ESV)" },
			{ text: "Those whom I love, I rebuke and discipline; therefore be zealous and repent.", author: "Revelation 3:19(NASB)" },
			{ text: "For God is not a God of confusion but of peace.", author: "1 Corinthians 14:33(ESV)" },
			{ text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.", author: "2 Timothy 1:7(KJV)" },
			{ text: "He has dug a pit and hollowed it out, And has fallen into the hole which he made. His harm will return on his own head, And his violence will descend on the top of his own head.", author: "Psalm 7:15-16(NASB)" },
			{ text: "He who is often reproved, yet stiffens his neck, will suddenly be broken beyond healing.", author: "Proverbs 29:1(NIV)" },
			{ text: "So it is written, that the Christ would suffer and rise from the dead on the third day, and that repentance for forgiveness of sins would be proclaimed in His name to all the nations, beginning from Jerusalem.", author: "Luke 24:46-47(NASB)" }
        ];
		

        let workingQueue = []; 
        let isPaused = false; // Tracks whether the rotation is currently paused

        const textElement = document.getElementById("quote-text");
        const authorElement = document.getElementById("quote-author");
        const containerElement = document.getElementById("quote-container");
        
        const displayTimeMs = 10000;

        function showNextQuote() {
            // If paused, skip changing the quote entirely until unpaused
            if (isPaused) return;

            if (workingQueue.length === 0) {
                workingQueue = [...masterQuotes];
            }

            const randomIndex = Math.floor(Math.random() * workingQueue.length);
            const selected = workingQueue.splice(randomIndex, 1)[0];

            containerElement.style.opacity = 0;

            setTimeout(() => {
                textElement.textContent = `"${selected.text}"`;
                authorElement.textContent = `— ${selected.author}`;
                containerElement.style.opacity = 1;
            }, 300);
        }

        // Toggle pause state whenever the quote box is clicked
        containerElement.addEventListener("click", () => {
            isPaused = !isPaused;
        });

        // Run immediately on page load
        showNextQuote();

        // Set up the timer loop
        setInterval(showNextQuote, displayTimeMs);