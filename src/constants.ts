import { Type } from './types';

export const ENNEAGRAM_TYPES: Type[] = [
  {
    number: 1,
    name: "The Reformer",
    tagline: "The Rational, Idealistic Type",
    headerImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "Ones are conscientious, ethical, and principled, possessing a profound sense of right and wrong. They act as teachers, crusaders, and advocates for positive change in the world. They are constantly striving to improve themselves, others, and their surroundings, driven by a deep-seated fear of making a mistake or being seen as flawed. They possess a high degree of integrity and are committed to living according to their values.",
    coreFear: "Being fundamentally corrupt, evil, or defective in some way, which drives them to constantly monitor their actions.",
    coreDesire: "To be truly good, to maintain personal integrity, and to achieve a sense of balance and wholeness in their lives.",
    keyMotivations: "They are driven by a desire to be right, to strive for higher standards, to improve everything they touch, to remain consistent with their deeply held ideals, to justify their actions to themselves, and to be beyond criticism so as to avoid condemnation.",
    traits: ["Principled", "Purposeful", "Self-Controlled", "Perfectionistic", "Conscientious", "Ethical", "High-Minded", "Idealistic", "Diligent", "Reliable", "Structured", "Discerning"],
    strengths: ["Ethical", "Wise", "Discerning", "Realistic", "Self-disciplined", "Moral Courage", "Reliable", "Honest", "Objective", "Principled", "Consistent", "Quality-focused", "Integrity-driven"],
    weaknesses: ["Rigid", "Judgmental", "Frustrated", "Resentful", "Critical", "Inflexible", "Self-Righteous", "Impatient", "Obsessive", "Intolerant", "Controlling", "Anxious", "Hyper-critical"],
    color: "#4A90E2",
    wings: [
      { 
        number: 9, 
        name: "The Idealist", 
        description: "The 1w9 is more detached, objective, and calm than the 1w2. They are often more focused on principles and abstract ideals.", 
        longDescription: "The Idealist. This wing brings a more detached, objective, and calm quality to the Type One. They are often more focused on principles and abstract ideals than on interpersonal crusades. They tend to be more introverted and may have a more scholarly or philosophical approach to their work. Their perfectionism is often directed inward or toward systems rather than people.",
        keyMotivation: "Seeking peace through order and logical systems.",
        behaviorExample: "Spending hours perfecting a logical system or a set of rules to create a peaceful environment."
      },
      { 
        number: 2, 
        name: "The Advocate", 
        description: "The 1w2 is more warm, helpful, and interpersonal. They are often more active in their crusades and more concerned with people.", 
        longDescription: "The Advocate. This wing brings a more warm, helpful, and interpersonal quality to the Type One. They are often more active in their crusades and more concerned with the welfare of people. They tend to be more extroverted and may be more vocal about their ideals. Their perfectionism is often expressed through service and a desire to help others improve.",
        keyMotivation: "Seeking to improve the world through direct service and advocacy.",
        behaviorExample: "Being a vocal advocate for social justice or community welfare to help others improve their lives."
      }
    ],
    relationships: {
      integration: { type: 7, description: "In growth, Ones become more spontaneous, joyful, and accepting of life's imperfections, moving toward the Enthusiast's energy." },
      disintegration: { type: 4, description: "Under stress, Ones can become moody, self-pitying, and emotionally volatile, moving toward the Individualist's shadow side." },
      compatibility: "Ones often pair well with Nines (who provide calm) and Sevens (who provide balance to their seriousness).",
      communicationStyle: "Direct, principled, and focused on improvement and clarity.",
      conflictStyle: "May become critical or rigid, seeking the 'right' way to resolve issues.",
      supportNeeds: "Appreciates reliability, integrity, and shared values in partners.",
      growthAdvice: [
        "Learn to distinguish between your inner critic and your own wise voice.",
        "Practice self-compassion and accept that perfection is an impossible standard.",
        "Allow yourself to experience joy and spontaneity without judgment.",
        "Recognize that there are many 'right' ways to do things.",
        "Practice deep breathing and physical relaxation to release tension.",
        "Challenge the 'shoulds' in your mind and replace them with 'coulds'.",
        "Celebrate small victories and progress, not just the final result.",
        "Learn to delegate tasks and trust others to do a 'good enough' job."
      ],
      redemptionType: 7,
      avoidType: 4,
      redemptionExplanation: "Type 7 brings spontaneity and joy, helping Type 1 loosen their rigid standards and embrace life's imperfections.",
      avoidExplanation: "Type 4's emotional volatility can trigger Type 1's inner critic and sense of frustration, leading to increased rigidity."
    },
    longDescription: "Type Ones, known as 'The Reformer,' are driven by a deep-seated desire to be good, balanced, and have integrity. They are constantly striving to improve themselves and the world around them, often feeling a heavy burden of responsibility. They have a powerful, relentless inner critic that monitors their thoughts and actions, leading to a constant sense of 'should' and 'must.' At their best, Ones are extraordinarily wise, discerning, and realistic. They possess a great deal of self-discipline and are capable of incredible feats of moral courage, often standing up for what is right even when it is unpopular. However, when they are under stress, their perfectionism can become rigid and judgmental, leading to intense frustration and resentment toward themselves and others who do not meet their impossibly high standards. They struggle to let go of the need for control and the belief that they are the only ones who can do things 'the right way'.",
    animal: "Ant / Bee (Symbolizing diligence and order)",
    animalImage: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to be patient with imperfection, starting with my own.",
    redemption: "Accepting that goodness is a gift of grace, not something to be earned through tireless perfection.",
    characterChange: ["Practicing silence", "Physical relaxation", "Non-judgmental observation", "Accepting 'good enough'"],
    symbol: "Circle (Wholeness) / Square (Stability)",
    symbolImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    saint: "St. Paul (Zeal for the law transformed into zeal for grace)",
    saintImage: "https://images.unsplash.com/photo-1544120190-2751381466fe?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "Be perfect, therefore, as your heavenly Father is perfect. (Matthew 5:48) - where 'perfect' means 'complete' or 'whole'.",
    happinessPath: "Finding joy in the inherent beauty of the present moment, exactly as it is.",
    familyLife: "Ones often create a home environment that is orderly, clean, and governed by clear rules. They are responsible parents who instill strong values in their children, though they may struggle with being overly critical or demanding. They often feel a heavy burden of responsibility for the family's moral well-being and may have difficulty relaxing at home.",
    intimacy: "Intimacy for Ones involves a deep sense of shared purpose and moral alignment. They show love through acts of service and by helping their partner become their 'best self'. They value honesty, loyalty, and a partner who respects their high standards and shares their commitment to growth.",
    sexuality: "Sexuality can be a complex area for Ones, as they may struggle with 'shoulds' and performance anxiety. When they feel safe and beyond judgment, they can be deeply passionate and attentive. They often need to learn that pleasure is not a 'distraction' from goodness but a vital part of a healthy life.",
    lifestyle: "Orderly, disciplined, and focused on self-improvement. They value structure, routine, and high-quality items that are durable and functional. They often have a 'place for everything and everything in its place' and prefer quality over quantity.",
    spiritualLife: "A journey from self-judgment to grace. They seek to align their lives with divine principles and often find God in the 'still small voice' of conscience. They are drawn to spiritual practices that emphasize integrity, transformation, and ethical living.",
    socialLife: "Conscientious and reliable friends. They prefer meaningful conversations over superficial small talk.",
    fortunes: "Success in fields requiring precision, ethics, and organization. They often find fulfillment in teaching, law, or quality control.",
    famousPeople: ["Confucius", "Plato", "Joan Baez", "George Harrison", "Al Gore", "Martha Stewart", "C.S. Lewis"]
  },
  {
    number: 2,
    name: "The Helper",
    tagline: "The Caring, Interpersonal Type",
    headerImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    description: "Twos are exceptionally generous, demonstrative, and people-pleasing, with a deep-seated need to be close to others. They are well-meaning and genuinely driven to support those around them, but they can sometimes fall into the pattern of doing things for others specifically to feel needed, valued, and loved.",
    coreFear: "Being fundamentally unwanted, unneeded, or unworthy of being loved.",
    coreDesire: "To feel truly loved, appreciated, and needed by those around them.",
    keyMotivations: "They are motivated by a deep desire to be loved, to express their feelings for others, to be needed and appreciated, to encourage others to respond to them, and to validate their own sense of worth through their helpfulness.",
    traits: ["Generous", "Demonstrative", "People-Pleasing", "Possessive", "Empathetic", "Nurturing", "Warm", "Sentimental", "Affectionate", "Supportive", "Intuitive", "Self-Sacrificing"],
    strengths: ["Empathetic", "Warm", "Giving", "Altruistic", "Loving", "Humble", "Supportive", "Intuitive", "Encouraging", "Compassionate", "Kind", "Attentive", "Relational"],
    weaknesses: ["Over-involved", "Manipulative", "Possessive", "Self-neglecting", "Indirect", "Needy", "Martyr-like", "Intrusive", "Jealous", "Over-sensitive", "Smothering", "Co-dependent"],
    color: "#F5A623",
    wings: [
      { 
        number: 1, 
        name: "The Servant", 
        description: "The 2w1 is more principled, quiet, and self-critical. They often feel a strong sense of duty and moral obligation.", 
        longDescription: "The Servant. This wing brings a more principled, quiet, and self-critical quality to the Type Two. They often feel a strong sense of duty and moral obligation. They are more likely to be introverted and may struggle with a sense of 'should' regarding their helpfulness. Their desire to be loved is tempered by a need to be 'good' and correct.",
        keyMotivation: "Helping out of a sense of moral duty and obligation.",
        behaviorExample: "Volunteering for a difficult task because it feels like the 'right' thing to do, even if it's not appreciated."
      },
      { 
        number: 3, 
        name: "The Host", 
        description: "The 2w3 is more ambitious, outgoing, and image-conscious. They are often more charming and focused on social success.", 
        longDescription: "The Host. This wing brings a more ambitious, outgoing, and image-conscious quality to the Type Two. They are often more charming and focused on social success. They tend to be more extroverted and may be more aware of how their helpfulness is perceived by others. Their desire to be loved is often expressed through being successful and admired.",
        keyMotivation: "Helping to be admired, successful, and socially valued.",
        behaviorExample: "Hosting an elaborate party to bring people together and be seen as a generous, successful host."
      }
    ],
    relationships: {
      integration: { type: 4, description: "In growth, Twos become more self-aware and emotionally honest, learning to take care of their own needs like an Individualist." },
      disintegration: { type: 8, description: "Under stress, Twos can become blunt, aggressive, and controlling, moving toward the Challenger's confrontational energy." },
      compatibility: "Twos often find deep connections with Fours (emotional depth) and Eights (strength and protection).",
      communicationStyle: "Warm, encouraging, and focused on emotional connection.",
      conflictStyle: "May become over-accommodating or indirectly manipulative to avoid rejection.",
      supportNeeds: "Needs to feel appreciated, seen, and loved for who they are, not just what they do.",
      growthAdvice: [
        "Learn to recognize and express your own needs directly.",
        "Practice setting healthy boundaries and saying 'no' without guilt.",
        "Understand that you are lovable even when you are not helping others.",
        "Develop self-nurturing habits that don't depend on external validation.",
        "Acknowledge your own feelings of resentment or anger when they arise.",
        "Spend time alone to discover who you are apart from your relationships.",
        "Ask yourself 'What do I want?' before automatically helping someone else.",
        "Learn to receive love and help from others without feeling obligated to return it."
      ],
      redemptionType: 4,
      avoidType: 8,
      redemptionExplanation: "Type 4 brings emotional honesty and self-awareness, helping Type 2 focus on their own needs and feelings.",
      avoidExplanation: "Type 8's confrontational energy can feel overwhelming and threatening to Type 2, causing them to become manipulative or overly accommodating."
    },
    longDescription: "Type Twos, known as 'The Helper,' are defined by their profound desire to be loved, needed, and appreciated. They are exceptionally empathetic, warm, demonstrative, and giving individuals. They have an uncanny ability to sense the unspoken needs of others and are often the first to offer support, comfort, or practical help. Their self-worth is frequently and deeply tied to their ability to be of service and to be indispensable to those they care about. At their best, Twos are truly altruistic, loving, humble, and compassionate. They offer unconditional care and are the 'glue' that holds many families, friendships, and communities together. However, their shadow side involves a deep-seated fear of being unworthy of love, which can lead them to become over-involved in others' lives, manipulative, or possessive in an attempt to secure the affection they crave. They may struggle to acknowledge their own needs, leading to hidden resentment when their efforts are not reciprocated.",
    animal: "Puppy / Elephant (Symbolizing nurturing and loyalty)",
    animalImage: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to remember that I am loved for who I am, not just for what I do for others.",
    redemption: "Realizing that their own needs are valid and that they are worthy of love without strings attached.",
    characterChange: ["Saying 'no' without guilt", "Spending time alone", "Asking for help directly", "Self-nurturing"],
    symbol: "Heart (Love and Compassion)",
    symbolImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
    saint: "St. Mary Magdalene (Devotion and service)",
    saintImage: "https://images.unsplash.com/photo-1519834125748-99753478a130?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "We love because he first loved us. (1 John 4:19)",
    happinessPath: "Nurturing themselves with the same compassion they so freely give to others.",
    familyLife: "Twos are the heart of the family, always nurturing and sensing everyone's needs. They create a warm, welcoming home but may struggle with 'smothering' or becoming resentful if their help isn't acknowledged. They often derive their identity from being the 'indispensable' family member and may struggle with boundaries.",
    intimacy: "In relationships, Twos are incredibly attentive and supportive. They express love through constant care and emotional availability. They need to feel appreciated and often struggle with expressing their own needs directly, fearing that being 'needy' will lead to rejection.",
    sexuality: "Sexuality for Twos is often a way to connect and feel loved. They are very responsive to their partner's desires and may prioritize their partner's pleasure over their own. They need to feel emotionally safe, 'chosen', and deeply valued for who they are.",
    lifestyle: "Centered around relationships and service. They are often busy helping others and may neglect their own self-care. Their homes are usually warm, inviting, and filled with photos, mementos, and items that facilitate hospitality.",
    spiritualLife: "Finding God through love and service. Learning that they are loved for being, not just doing. They often find spiritual fulfillment in community, prayer for others, and acts of compassion that reflect divine love.",
    socialLife: "The heart of any social group. They are warm, welcoming, and always ready to offer a helping hand.",
    fortunes: "Prosperity through emotional intelligence and networking. They excel in healthcare, counseling, and non-profit work.",
    famousPeople: ["Mother Teresa", "Eleanor Roosevelt", "Princess Diana", "Danny Thomas", "Leo Buscaglia", "Elizabeth Taylor"]
  },
  {
    number: 3,
    name: "The Achiever",
    tagline: "The Success-Oriented, Pragmatic Type",
    headerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Threes are self-assured, attractive, and charming, with a strong drive for success and achievement. They are highly ambitious, competent, and energetic, but can also become status-conscious, image-driven, and disconnected from their true feelings in their pursuit of external validation.",
    coreFear: "Being fundamentally worthless or failing to achieve.",
    coreDesire: "To feel truly valuable, worthwhile, and admired for their accomplishments.",
    keyMotivations: "They are motivated by a deep desire to be affirmed, to distinguish themselves from others, to gain attention, to be admired, and to impress others with their achievements.",
    traits: ["Adaptable", "Excelling", "Driven", "Image-Conscious", "Ambitious", "Competent", "Energetic", "Pragmatic", "Efficient", "Goal-Oriented", "Confident", "Competitive"],
    strengths: ["Competent", "Energetic", "Self-accepting", "Authentic", "Inspiring", "Pragmatic", "Efficient", "Goal-oriented", "Confident", "Productive", "Resourceful", "Motivating", "Dynamic"],
    weaknesses: ["Status-conscious", "Competitive", "Disconnected from feelings", "Workaholic", "Vain", "Deceptive", "Superficial", "Impatient", "Arrogant", "Burnout-prone", "Opportunistic", "Inauthentic"],
    color: "#F8E71C",
    wings: [
      { 
        number: 2, 
        name: "The Star", 
        description: "The 3w2 is more warm, helpful, and people-oriented. They are often more charming and concerned with being liked.", 
        longDescription: "The Star. This wing brings a more warm, helpful, and people-oriented quality to the Type Three. They are often more charming and concerned with being liked. They tend to be more extroverted and may use their success to gain affection and appreciation from others. Their ambition is flavored by a desire to be of service or to be seen as a 'good person'.",
        keyMotivation: "Success through being liked, appreciated, and helpful to others.",
        behaviorExample: "Using professional success to mentor others and gain affection from their community."
      },
      { 
        number: 4, 
        name: "The Professional", 
        description: "The 3w4 is more serious, task-oriented, and introverted. They are often more focused on their unique identity and professional excellence.", 
        longDescription: "The Professional. This wing brings a more serious, task-oriented, and introverted quality to the Type Three. They are often more focused on their unique identity and professional excellence. They tend to be more concerned with being 'the best' in their specific niche and may have a more artistic or specialized approach to their work.",
        keyMotivation: "Success through unique excellence and specialized mastery.",
        behaviorExample: "Working tirelessly to master a specialized skill to be seen as both successful and uniquely talented."
      }
    ],
    relationships: {
      integration: { type: 6, description: "In growth, Threes become more cooperative, committed, and focused on the group's welfare, moving toward the Loyalist's stability." },
      disintegration: { type: 9, description: "Under stress, Threes can become disengaged, apathetic, and unmotivated, moving toward the Peacemaker's withdrawal." },
      compatibility: "Threes pair well with Sixes (loyalty) and Nines (acceptance and lack of competition).",
      communicationStyle: "Efficient, goal-oriented, and focused on positive results.",
      conflictStyle: "May avoid emotions to stay productive or become competitive to maintain image.",
      supportNeeds: "Appreciates recognition of their hard work and support for their ambitions.",
      growthAdvice: [
        "Practice being authentic and vulnerable with trusted people.",
        "Learn to value yourself for who you are, not just for what you achieve.",
        "Slow down and connect with your true feelings and desires.",
        "Recognize when you are performing for others' approval.",
        "Take breaks and prioritize rest to avoid burnout.",
        "Engage in activities where there is no competition or 'winning'.",
        "Be honest with yourself about your failures and limitations.",
        "Practice active listening without trying to impress or solve everything."
      ],
      redemptionType: 6,
      avoidType: 9,
      redemptionExplanation: "Type 6 brings loyalty, commitment, and focus on the group's welfare, helping Type 3 move beyond image-consciousness.",
      avoidExplanation: "Type 9's tendency toward apathy and disengagement can frustrate Type 3's need for efficiency and progress."
    },
    longDescription: "Type Threes, 'The Achievers,' are success-oriented, pragmatic, and highly adaptable individuals. Their core desire is to feel valuable and worthwhile, which they often pursue through external accomplishments, recognition, and status. Threes are masters of image and can easily adjust their persona to fit the expectations of their environment, making them highly effective in professional and social settings. At their best, Threes are self-accepting, authentic, and inspiring role models who use their talents to contribute meaningfully to society, genuinely believing in their own value. When they are struggling, however, they can become overly focused on their image, competitive to a fault, and disconnected from their true feelings in the relentless pursuit of success, often feeling like they are 'performing' rather than living.",
    animal: "Eagle / Peacock (Symbolizing achievement and image)",
    animalImage: "https://images.unsplash.com/photo-1450612623073-70a1d5eb1ff1?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to be authentic and to find my value in Your eyes, not in my accomplishments.",
    redemption: "Dropping the mask and being loved for their true, vulnerable, and unadorned self.",
    characterChange: ["Honesty about feelings", "Slowing down", "Doing things without an audience", "Practicing vulnerability"],
    symbol: "Star / Trophy (Excellence and Recognition)",
    symbolImage: "https://images.unsplash.com/photo-1541535650810-10d26f5c2abb?auto=format&fit=crop&w=800&q=80",
    saint: "St. Augustine (Ambition and intellect turned toward the Divine)",
    saintImage: "https://images.unsplash.com/photo-1515542641795-06ed223c38d8?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "For what shall it profit a man, if he shall gain the whole world, and lose his own soul? (Mark 8:36)",
    happinessPath: "Living from the heart's truth rather than the ego's performance.",
    familyLife: "Threes often see their family as a reflection of their success. They are high-energy parents who encourage their children to excel and provide them with many opportunities. However, they may struggle to 'turn off' their work mode at home and may prioritize achievement over emotional connection.",
    intimacy: "In relationships, Threes are supportive and encouraging. They show love by providing for their partner and helping them achieve their goals. They may struggle with vulnerability, fearing that if they aren't 'successful' or 'perfect', they won't be loved.",
    sexuality: "Sexuality for Threes can sometimes be another area for 'performance' or achievement. They are often very attentive to their partner's satisfaction but may struggle to truly 'be' in the moment. They need to learn that they are loved for their essence, not their performance.",
    lifestyle: "High-energy, goal-oriented, and focused on achievement. They are often very busy, productive, and value items that signal success and competence. They prefer a lifestyle that is efficient and allows them to maintain a positive image.",
    spiritualLife: "Moving from performance to presence. Finding their true value in God's love, not their success. They are drawn to spiritual practices that emphasize authenticity, stillness, and the inherent worth of the soul.",
    socialLife: "Charming and adaptable. They are often the 'stars' of their social circles and value networking.",
    fortunes: "High potential for financial success and leadership. They thrive in business, marketing, and public-facing roles.",
    famousPeople: ["Augustus Caesar", "Bill Clinton", "Oprah Winfrey", "Tom Cruise", "Barbra Streisand", "Arnold Schwarzenegger"]
  },
  {
    number: 4,
    name: "The Individualist",
    tagline: "The Sensitive, Withdrawn Type",
    headerImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
    description: "Fours are deeply self-aware, sensitive, and reserved, with a rich inner world and a profound capacity for emotional honesty. They are creative, individualistic, and deeply personal, but can also struggle with intense moodiness, self-consciousness, and a persistent sense of feeling fundamentally different or misunderstood by others.",
    coreFear: "Being fundamentally without identity, personal significance, or being inherently flawed and misunderstood.",
    coreDesire: "To find their true self, to express their unique identity, and to be deeply understood and appreciated for who they are.",
    keyMotivations: "They are motivated by a deep desire to express their unique individuality, to create and surround themselves with beauty, to maintain certain moods and feelings, to withdraw to protect their self-image, to prioritize their emotional needs, and to find a deep, meaningful connection that validates their unique experience.",
    traits: ["Expressive", "Dramatic", "Self-Absorbed", "Temperamental", "Sensitive", "Introspective", "Artistic", "Authentic", "Unique", "Creative", "Deep", "Individualistic"],
    strengths: ["Self-aware", "Sensitive", "Creative", "Personal", "Emotionally honest", "Unique", "Deep", "Intuitive", "Compassionate", "Authentic", "Expressive", "Original", "Empathetic"],
    weaknesses: ["Moody", "Self-conscious", "Reserved", "Melancholy", "Envious", "Withdrawn", "Self-indulgent", "Depressive", "Vulnerable", "Temperamental", "Self-absorbed", "Alienated", "Longing"],
    color: "#BD10E0",
    wings: [
      { 
        number: 3, 
        name: "The Aristocrat", 
        description: "The 4w3 is more ambitious, competitive, and image-conscious. They are often more focused on external success and recognition.", 
        longDescription: "The Aristocrat. This wing brings a more ambitious, competitive, and image-conscious quality to the Type Four. They are often more focused on external success and recognition as a way to validate their unique identity. They tend to be more extroverted and may be more productive or goal-oriented than the 4w5.",
        keyMotivation: "Identity through achievement and external recognition.",
        behaviorExample: "Creating a highly stylized public persona to be seen as both unique and successful."
      },
      { 
        number: 5, 
        name: "The Free Spirit", 
        description: "The 4w5 is more intellectual, eccentric, and withdrawn. They are often more focused on their inner world and complex ideas.", 
        longDescription: "The Free Spirit. This wing brings a more intellectual, eccentric, and withdrawn quality to the Type Four. They are often more focused on their inner world and complex ideas. They tend to be more introverted and may have a more scholarly or unconventional approach to their creativity. They are often the most 'individualistic' of the Individualists.",
        keyMotivation: "Identity through complex ideas and intellectual depth.",
        behaviorExample: "Spending long periods in isolation exploring unconventional philosophies to find personal significance."
      }
    ],
    relationships: {
      integration: { type: 1, description: "In growth, Fours become more disciplined, objective, and grounded in reality, moving toward the Reformer's principled action." },
      disintegration: { type: 2, description: "Under stress, Fours can become overly dependent, clingy, and manipulative to get attention, moving toward the Helper's shadow side." },
      compatibility: "Fours often connect with Twos (who provide care) and Ones (who provide structure and grounding).",
      communicationStyle: "Authentic, expressive, and focused on deep emotional meaning.",
      conflictStyle: "May withdraw into moods or become dramatic to express their inner pain.",
      supportNeeds: "Needs space for their emotions and a partner who values their unique perspective.",
      growthAdvice: [
        "Practice grounding yourself in the present moment and daily routines.",
        "Learn to observe your emotions without being consumed by them.",
        "Focus on objective reality rather than just your internal feelings.",
        "Channel your emotional energy into productive, creative action.",
        "Practice gratitude for what you have rather than longing for what's missing.",
        "Engage in physical activity to get out of your head and into your body.",
        "Set small, achievable goals to build a sense of competence.",
        "Connect with others through shared experiences, not just shared pain."
      ],
      redemptionType: 1,
      avoidType: 2,
      redemptionExplanation: "Type 1 brings discipline, objectivity, and grounding, helping Type 4 translate their emotions into productive action.",
      avoidExplanation: "Type 2's tendency to be over-involved and needy can trigger Type 4's feelings of being overwhelmed or misunderstood."
    },
    longDescription: "Type Fours, 'The Individualists,' are the most sensitive and introspective type. They are driven by a need to find their unique identity and personal significance. Fours often feel that they are fundamentally different from others, which can lead to both a sense of specialness and a deep feeling of longing or melancholy. At their best, Fours are profoundly creative, emotionally honest, and capable of transforming their suffering into beauty. They have a unique ability to sit with deep emotions and offer profound empathy. In their lower states, they can become self-absorbed, moody, and lost in a world of 'what if' and 'if only,' often withdrawing from others to protect their fragile self-image.",
    animal: "Swan / Black Panther (Symbolizing depth and uniqueness)",
    animalImage: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to see the beauty in the ordinary and to know that I am already significant.",
    redemption: "Finding that their 'missing piece' is already within them and in the common human experience.",
    characterChange: ["Establishing routines", "Objective service to others", "Gratitude for the present", "Emotional regulation"],
    symbol: "Purple Rose / Mirror (Beauty and Reflection)",
    symbolImage: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&w=800&q=80",
    saint: "St. John of the Cross (Navigating the 'Dark Night of the Soul')",
    saintImage: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "I praise you because I am fearfully and wonderfully made. (Psalm 139:14)",
    happinessPath: "Connecting with others through shared humanity rather than perceived uniqueness.",
    familyLife: "Fours bring depth and creativity to family life. They value authentic emotional expression and may create a home that is aesthetically unique and emotionally rich. They can be moody parents but are deeply empathetic to their children's feelings and encourage their individuality.",
    intimacy: "In relationships, Fours seek deep, soulful connection. They value emotional honesty and are willing to explore the 'shadow' sides of life with their partner. They may struggle with feelings of being 'too much' or 'not enough' and may withdraw if they feel misunderstood.",
    sexuality: "Sexuality for Fours is often an intense, emotional experience. It is a way to express their deepest self and connect on a profound level. They value passion, mystery, and a partner who can meet them in their emotional intensity.",
    lifestyle: "Creative, expressive, and focused on authenticity. They value beauty, emotional depth, and unique items that reflect their personal identity. They often prefer a lifestyle that allows for introspection and creative expression.",
    spiritualLife: "A deep, often intense search for meaning and identity. Finding God in the 'dark night of the soul' and in the beauty of creation. They are drawn to spiritual practices that emphasize mystery, ritual, and emotional depth.",
    socialLife: "They prefer deep, one-on-one connections. They can be seen as mysterious or reserved in large groups.",
    fortunes: "Success in creative and artistic endeavors. They find wealth in authenticity and unique self-expression.",
    famousPeople: ["Rumi", "Virginia Woolf", "Anne Frank", "Johnny Depp", "Bob Dylan", "Prince", "Frida Kahlo"]
  },
  {
    number: 5,
    name: "The Investigator",
    tagline: "The Intense, Cerebral Type",
    headerImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    description: "Fives are intensely alert, insightful, and curious, with a profound capacity for concentration and the development of complex ideas and skills. They are independent, innovative, and inventive, but can also become deeply preoccupied with their own thoughts, internal knowledge, and imaginary constructs, often withdrawing from the world to conserve their energy and maintain a sense of autonomy.",
    coreFear: "Being fundamentally useless, helpless, incapable, or overwhelmed by the demands of the world.",
    coreDesire: "To be truly capable, competent, and to understand the world around them in depth.",
    keyMotivations: "They are motivated by a deep desire to possess knowledge, to understand their environment, to have everything figured out, and to maintain a sense of autonomy as a way of defending themselves from the overwhelming demands of the world.",
    traits: ["Perceptive", "Innovative", "Secretive", "Isolated", "Cerebral", "Analytical", "Independent", "Curious", "Insightful", "Objective", "Inventive", "Detached"],
    strengths: ["Intellectual", "Analytical", "Objective", "Competent", "Independent", "Profound", "Visionary", "Focused", "Inventive", "Perceptive", "Knowledgeable", "Calm", "Observant"],
    weaknesses: ["Detached", "Overwhelmed by demands", "Withdrawn", "Cynical", "Reclusive", "Nihilistic", "Eccentric", "Stingy with time/energy", "Arrogant", "Socially awkward", "Anxious", "Hoarding"],
    color: "#50E3C2",
    wings: [
      { 
        number: 4, 
        name: "The Iconoclast", 
        description: "The 5w4 is more creative, sensitive, and emotional. They are often more focused on their unique perspective and artistic expression.", 
        longDescription: "The Iconoclast. This wing brings a more creative, sensitive, and emotional quality to the Type Five. They are often more focused on their unique perspective and artistic expression. They tend to be more introverted and may use their knowledge to explore the depths of human experience or to create something truly original.",
        keyMotivation: "Knowledge through unique expression and creative insight.",
        behaviorExample: "Using deep knowledge to create a highly original piece of art or music that expresses their inner world."
      },
      { 
        number: 6, 
        name: "The Problem Solver", 
        description: "The 5w6 is more practical, disciplined, and detail-oriented. They are often more focused on technical mastery and security.", 
        longDescription: "The Problem Solver. This wing brings a more practical, disciplined, and detail-oriented quality to the Type Five. They are often more focused on technical mastery and security. They tend to be more concerned with how their knowledge can be applied to solve real-world problems and may be more collaborative than the 5w4.",
        keyMotivation: "Knowledge through technical mastery and practical security.",
        behaviorExample: "Becoming an expert in a technical field to ensure they are always prepared for any potential problem."
      }
    ],
    relationships: {
      integration: { type: 8, description: "In growth, Fives become more assertive, physically active, and confident in their ability to impact the world, moving toward the Challenger's strength." },
      disintegration: { type: 7, description: "Under stress, Fives can become scattered, hyperactive, and impulsive, moving toward the Enthusiast's frantic energy." },
      compatibility: "Fives often find balance with Eights (who provide action) and Nines (who provide a non-demanding presence).",
      communicationStyle: "Objective, concise, and focused on sharing information and insights.",
      conflictStyle: "May withdraw to process information or become detached to protect their energy.",
      supportNeeds: "Appreciates respect for their privacy, independence, and intellectual pursuits.",
      growthAdvice: [
        "Practice engaging more fully with your physical body and the world.",
        "Learn to share your thoughts and feelings with others more openly.",
        "Recognize that you have enough energy and resources to participate.",
        "Move from observation to active participation in life.",
        "Set limits on your research and start taking action.",
        "Practice small acts of generosity with your time and energy.",
        "Connect with your emotions through art, music, or nature.",
        "Reach out to friends even when you feel like withdrawing."
      ],
      redemptionType: 8,
      avoidType: 7,
      redemptionExplanation: "Type 8 brings assertiveness, confidence, and connection to the physical world, helping Type 5 engage more fully.",
      avoidExplanation: "Type 7's scattered, impulsive energy can overwhelm Type 5's need for focus and depth."
    },
    longDescription: "Type Fives, 'The Investigators,' are intense, cerebral, and highly observant. They are driven by a need to be capable and competent, which they pursue by gathering knowledge and understanding complex systems. Fives often feel that the world is demanding and intrusive, leading them to withdraw into their minds to conserve their energy. At their best, Fives are visionary pioneers, capable of profound insight and innovation. They are the thinkers and inventors who push the boundaries of human knowledge. When they are struggling, they can become isolated, eccentric, and nihilistic, becoming so preoccupied with their internal theories that they lose touch with the physical world and their own emotional needs.",
    animal: "Owl / Fox (Symbolizing wisdom and observation)",
    animalImage: "https://images.unsplash.com/photo-1543549710-1f02f989d429?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to trust that I have enough and to engage fully with the world.",
    redemption: "Moving from hoarding knowledge to participating in the generous flow of life and love.",
    characterChange: ["Physical activity", "Sharing thoughts early", "Emotional expression", "Engaging with others"],
    symbol: "Key / Telescope (Access and Insight)",
    symbolImage: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800&q=80",
    saint: "St. Thomas Aquinas (The intellectual pursuit of God)",
    saintImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "The fear of the Lord is the beginning of wisdom. (Proverbs 9:10)",
    happinessPath: "Finding that the more they give of themselves, the more they truly have.",
    familyLife: "Fives value their privacy and independence, even within the family. They are often the 'quiet' parent who provides intellectual stimulation and encourages curiosity. They may struggle with the emotional demands of family life and need significant time alone to recharge.",
    intimacy: "In relationships, Fives value intellectual connection and respect for their boundaries. They show love through sharing their knowledge and being a steady, objective presence. They may struggle with emotional intimacy, fearing that they will be 'drained' by their partner's needs.",
    sexuality: "Sexuality for Fives can be a way to connect without the need for intense verbal communication. They value a partner who respects their need for space and doesn't demand more than they can give. They may find that physical intimacy helps them get 'out of their head'.",
    lifestyle: "Independent, minimalist, and focused on intellectual pursuits. They value their privacy, time alone, and items that are functional and provide information. They prefer a lifestyle that is low-demand and allows for deep focus.",
    spiritualLife: "Seeking to understand the mysteries of the universe. Finding God through wisdom, contemplation, and the pursuit of truth. They are drawn to spiritual practices that emphasize silence, study, and the vastness of the divine.",
    socialLife: "They prefer small groups of like-minded people. They can be detached but are loyal to those they trust.",
    fortunes: "Success in technical, scientific, or research-based fields. They find wealth through specialized knowledge and innovation.",
    famousPeople: ["Albert Einstein", "Stephen Hawking", "Bill Gates", "Mark Zuckerberg", "Jane Austen", "Isaac Newton"]
  },
  {
    number: 6,
    name: "The Loyalist",
    tagline: "The Committed, Security-Oriented Type",
    headerImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    description: "The committed, security-oriented type. Sixes are reliable, hard-working, responsible, and trustworthy. Excellent 'troubleshooters,' they foresee problems and foster cooperation, but can also become defensive, evasive, and anxious.",
    coreFear: "Being without support and guidance",
    coreDesire: "To have a sense of security, stability, and reliable support from those they trust.",
    keyMotivations: "Want to have security, to feel supported by others, to have certitude and reassurance, to test the attitudes of others toward them, to fight against anxiety and insecurity.",
    traits: ["Engaging", "Responsible", "Anxious", "Suspicious", "Committed", "Security-Oriented", "Reliable", "Skeptical", "Loyal", "Troubleshooter", "Cautious", "Vigilant"],
    strengths: ["Reliable", "Hard-working", "Committed", "Courageous", "Self-reliant", "Trustworthy", "Foresighted", "Cooperative", "Loyal", "Responsible", "Dutiful", "Practical", "Supportive"],
    weaknesses: ["Defensive", "Frantic search for certainty", "Testing loyalty", "Skeptical", "Reactive", "Indecisive", "Paranoid", "Authoritarian", "Anxious", "Suspicious", "Pessimistic", "Rigid"],
    color: "#B8E986",
    wings: [
      { 
        number: 5, 
        name: "The Defender", 
        description: "The 6w5 is more intellectual, serious, and independent. They are often more focused on systems and analytical thinking.", 
        longDescription: "The Defender. This wing brings a more intellectual, serious, and independent quality to the Type Six. They are often more focused on systems and analytical thinking as a way to find security. They tend to be more introverted and may be more cautious or skeptical of others. Their loyalty is often directed toward ideas or institutions.",
        keyMotivation: "Security through analytical thinking and systematic research.",
        behaviorExample: "Meticulously researching a topic before making a decision to minimize any potential risk."
      },
      { 
        number: 7, 
        name: "The Buddy", 
        description: "The 6w7 is more playful, outgoing, and engaging. They are often more focused on social connection and avoiding anxiety through activity.", 
        longDescription: "The Buddy. This wing brings a more playful, outgoing, and engaging quality to the Type Six. They are often more focused on social connection and avoiding anxiety through activity. They tend to be more extroverted and may use humor or charm to build a support network. Their loyalty is often directed toward people and groups.",
        keyMotivation: "Security through social connection and group belonging.",
        behaviorExample: "Using humor to ease tension in a group and build a supportive network to avoid fear."
      }
    ],
    relationships: {
      integration: { type: 9, description: "In growth, Sixes become more relaxed, trusting, and peaceful, moving toward the Peacemaker's inner stability." },
      disintegration: { type: 3, description: "Under stress, Sixes can become competitive, image-conscious, and workaholic, moving toward the Achiever's driven behavior." },
      compatibility: "Sixes pair well with Threes (ambition) and Nines (calm and trust).",
      communicationStyle: "Careful, questioning, and focused on building trust and security.",
      conflictStyle: "May become defensive or seek reassurance when feeling anxious or uncertain.",
      supportNeeds: "Needs consistency, loyalty, and a partner who can provide a sense of safety.",
      growthAdvice: [
        "Learn to trust your own inner guidance and intuition.",
        "Practice facing your fears directly rather than scanning for threats.",
        "Develop self-confidence by taking small, independent risks.",
        "Recognize that absolute certainty is not possible or necessary.",
        "Practice mindfulness to calm your racing thoughts.",
        "Identify the 'worst-case scenarios' and realize you can handle them.",
        "Learn to distinguish between real threats and imagined anxieties.",
        "Build a support network but also practice self-reliance."
      ],
      redemptionType: 9,
      avoidType: 3,
      redemptionExplanation: "Type 9 brings inner stability, peace, and trust, helping Type 6 calm their anxious, scanning mind.",
      avoidExplanation: "Type 3's competitive, image-driven behavior can trigger Type 6's suspicion and fear of being manipulated."
    },
    longDescription: "Type Sixes, 'The Loyalists,' are the most security-oriented type. They are reliable, hard-working, and deeply committed to their relationships and beliefs. Sixes are constantly scanning their environment for potential threats, which can lead to a baseline of anxiety. They seek security and support from others and value trust above all else. At their best, Sixes are courageous, self-reliant, and fiercely loyal champions of their communities. They are the 'glue' that provides stability and foresight. When they are under stress, their anxiety can manifest as suspicion, defensiveness, or a frantic search for certainty, often leading them to test the loyalty of those around them.",
    animal: "Deer / Wolf (Symbolizing alertness and loyalty)",
    animalImage: "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to trust in Your guidance and to find my security in You.",
    redemption: "Finding an inner 'authority' and peace that transcends external threats and uncertainties.",
    characterChange: ["Testing own strength", "Practicing silence", "Identifying own desires", "Building self-trust"],
    symbol: "Shield / Anchor (Protection and Stability)",
    symbolImage: "https://images.unsplash.com/photo-1515233116542-887754388e63?auto=format&fit=crop&w=800&q=80",
    saint: "St. Peter (The journey from fear to rock-solid faith)",
    saintImage: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "There is no fear in love. But perfect love drives out fear. (1 John 4:18)",
    happinessPath: "Replacing constant anxiety with a deep, abiding trust in the goodness of life.",
    familyLife: "Sixes are the 'protectors' of the family. They create a secure, stable home and are fiercely loyal to their loved ones. They are responsible parents who plan for every eventuality, but they may struggle with over-worrying about their children's safety and the family's future.",
    intimacy: "In relationships, Sixes value trust and loyalty above all else. They show love through their commitment and by being a reliable, supportive partner. They need constant reassurance and may struggle with suspicion or testing their partner's loyalty.",
    sexuality: "Sexuality for Sixes is often a way to feel secure and connected. They value a partner who is consistent and trustworthy. When they feel safe, they can be deeply devoted and passionate. They need to learn to trust their own desires.",
    lifestyle: "Responsible, cautious, and focused on security. They value loyalty, community, and items that provide safety and reliability. They prefer a lifestyle that is predictable and provides a sense of belonging.",
    spiritualLife: "A journey from anxiety to trust. Finding God as a 'rock' and a safe harbor in an uncertain world. They are drawn to spiritual practices that emphasize community, tradition, and the faithfulness of the divine.",
    socialLife: "Loyal and supportive friends. They value being part of a group and are excellent troubleshooters.",
    fortunes: "Stability and success in established organizations and community-focused roles. They excel in risk management and logistics.",
    famousPeople: ["Sigmund Freud", "Robert F. Kennedy", "Malcolm X", "George H.W. Bush", "Tom Hanks", "Princess Anne"]
  },
  {
    number: 7,
    name: "The Enthusiast",
    tagline: "The Busy, Fun-Loving Type",
    headerImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    description: "Sevens are extroverted, optimistic, versatile, and spontaneous. Playful, high-spirited, and practical, they can also misapply their many talents, becoming over-extended, scattered, and undisciplined.",
    coreFear: "Being deprived and in pain",
    coreDesire: "To be satisfied and content—to have their needs fulfilled",
    keyMotivations: "Want to maintain their freedom and happiness, to avoid missing out on worthwhile experiences, to keep themselves excited and occupied, to avoid and discharge pain.",
    traits: ["Spontaneous", "Versatile", "Distractible", "Scattered", "Optimistic", "Extroverted", "Playful", "High-Spirited", "Enthusiastic", "Adventurous", "Quick-Thinking", "Curious"],
    strengths: ["Optimistic", "Joyful", "Accomplished", "Grateful", "Enthusiastic", "High-spirited", "Visionary", "Quick-thinking", "Resilient", "Versatile", "Creative", "Inspiring", "Energetic"],
    weaknesses: ["Undisciplined", "Impulsive", "Avoiding pain", "Over-extended", "Superficial", "Narcissistic", "Escapist", "Unfocused", "Self-centered", "Impatient", "Reckless", "Insensitive"],
    color: "#FF5A5F",
    wings: [
      { 
        number: 6, 
        name: "The Entertainer", 
        description: "The 7w6 is more responsible, loyal, and relationship-oriented. They are often more concerned with security and group belonging.", 
        longDescription: "The Entertainer. This wing brings a more responsible, loyal, and relationship-oriented quality to the Type Seven. They are often more concerned with security and group belonging. They tend to be more anxious than the 7w8 and may use their enthusiasm to keep others happy and engaged. Their desire for fun is tempered by a need for connection.",
        keyMotivation: "Fun through group belonging and social support.",
        behaviorExample: "Organizing a group outing to ensure everyone is having fun together and staying connected."
      },
      { 
        number: 8, 
        name: "The Realist", 
        description: "The 7w8 is more assertive, practical, and grounded. They are often more focused on power and getting what they want.", 
        longDescription: "The Realist. This wing brings a more assertive, practical, and grounded quality to the Type Seven. They are often more focused on power and getting what they want. They tend to be more confident and may be more direct or even aggressive in their pursuit of new experiences. Their desire for fun is flavored by a need for intensity and control.",
        keyMotivation: "Fun through power, intensity, and control over experiences.",
        behaviorExample: "Aggressively pursuing a new business venture for both the intensity and the stimulation it provides."
      }
    ],
    relationships: {
      integration: { type: 5, description: "In growth, Sevens become more focused, profound, and observant, moving toward the Investigator's depth and concentration." },
      disintegration: { type: 1, description: "Under stress, Sevens can become critical, perfectionistic, and rigid, moving toward the Reformer's judgmental side." },
      compatibility: "Sevens often enjoy the company of Ones (who provide focus) and Fives (who provide intellectual depth).",
      communicationStyle: "Enthusiastic, fast-paced, and focused on possibilities and fun.",
      conflictStyle: "May use humor to deflect or avoid difficult emotions by seeking distraction.",
      supportNeeds: "Appreciates variety, freedom, and a partner who can share in their adventures.",
      growthAdvice: [
        "Practice staying present with difficult or painful emotions.",
        "Learn to find satisfaction in the present moment rather than the next big thing.",
        "Develop focus and follow-through on your commitments.",
        "Recognize that true freedom comes from internal depth, not external variety.",
        "Practice silence and solitude to calm your mind.",
        "Learn to say 'no' to new opportunities to focus on what's important.",
        "Acknowledge the impact of your actions on others.",
        "Find joy in simple, everyday experiences."
      ],
      redemptionType: 5,
      avoidType: 1,
      redemptionExplanation: "Type 5 brings depth, concentration, and observation, helping Type 7 find satisfaction in the present moment.",
      avoidExplanation: "Type 1's critical, perfectionistic nature can make Type 7 feel restricted and judged, leading to avoidance."
    },
    longDescription: "Type Sevens, 'The Enthusiasts,' are extroverted, optimistic, and versatile. They are driven by a need to be satisfied and content, which they pursue by seeking out new and exciting experiences. Sevens are masters of reframing negative situations into positive ones and are always looking for the next adventure. At their best, Sevens are truly joyful, accomplished, and grateful individuals who bring a sense of abundance and possibility to everything they do. However, their fear of being deprived or in pain can lead them to become scattered, impulsive, and undisciplined, constantly running from one experience to the next to avoid facing their internal discomfort.",
    animal: "Monkey / Butterfly (Symbolizing enthusiasm and freedom)",
    animalImage: "https://images.unsplash.com/photo-1506755855567-92ff770e8d00?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to be present in this moment and to find depth in the simple things.",
    redemption: "Realizing that the 'feast' they seek is found by staying with the present, even the pain.",
    characterChange: ["Commitment to one thing", "Practicing silence", "Staying with difficult emotions", "Sobriety of mind"],
    symbol: "Rainbow / Hot Air Balloon (Joy and Perspective)",
    symbolImage: "https://images.unsplash.com/photo-1514467958574-7abc7f7d2f77?auto=format&fit=crop&w=800&q=80",
    saint: "St. Philip Neri (Known for his humor and joyful spirit)",
    saintImage: "https://images.unsplash.com/photo-1514525253344-f81f3f74414f?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "This is the day the Lord has made; let us rejoice and be glad in it. (Psalm 118:24)",
    happinessPath: "Finding that true joy is found in depth and presence, not just variety.",
    familyLife: "Sevens bring fun and adventure to the family. They are the 'fun parents' who are always planning the next trip or activity. They value freedom and variety, but they may struggle with the mundane aspects of daily family routines and the emotional weight of family problems.",
    intimacy: "In relationships, Sevens are fun-loving and adventurous. They show love by sharing their joy and planning exciting experiences with their partner. They may struggle with commitment, fearing that they will be 'trapped' or miss out on other opportunities.",
    sexuality: "Sexuality for Sevens is often a playful and adventurous experience. They value variety, spontaneity, and a partner who can keep up with their high energy. They need to learn that true depth and satisfaction come from being present, not just from newness.",
    lifestyle: "Spontaneous, adventurous, and focused on joy. They value freedom, new experiences, and items that provide stimulation and fun. They prefer a lifestyle that is fast-paced, varied, and allows for constant exploration.",
    spiritualLife: "Finding God in the abundance and beauty of life. Learning to find depth in the present moment and in the 'sacrament of the ordinary'. They are drawn to spiritual practices that emphasize gratitude, joy, and the interconnectedness of all things.",
    socialLife: "The life of the party. They are fun-loving, optimistic, and always ready for the next adventure.",
    fortunes: "Prosperity through entrepreneurship and creative problem-solving. They thrive in travel, entertainment, and fast-paced environments.",
    famousPeople: ["Benjamin Franklin", "Leonardo da Vinci", "Richard Branson", "Steven Spielberg", "Robin Williams", "Jim Carrey"]
  },
  {
    number: 8,
    name: "The Challenger",
    tagline: "The Powerful, Dominating Type",
    headerImage: "https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?auto=format&fit=crop&w=1200&q=80",
    description: "Eights are self-confident, strong, and assertive. Protective, resourceful, straight-talking, and decisive, but can also be ego-centric and domineering.",
    coreFear: "Being harmed or controlled by others",
    coreDesire: "To protect themselves (to be in control of their own life and destiny)",
    keyMotivations: "Want to be self-reliant, to prove their strength and resist weakness, to be important in their world, to stay in control of their situation, to prevail over others.",
    traits: ["Self-Confident", "Decisive", "Willful", "Confrontational", "Assertive", "Protective", "Direct", "Powerful", "Strong", "Resourceful", "Independent", "Honest"],
    strengths: ["Strong", "Assertive", "Protective", "Resourceful", "Heroic", "Magnanimous", "Decisive", "Honest", "Inspiring", "Courageous", "Direct", "Loyal", "Empowering"],
    weaknesses: ["Domineering", "Ego-centric", "Intimidating", "Aggressive", "Insensitive", "Vindictive", "Rebellious", "Lacking restraint", "Confrontational", "Blunt", "Skeptical", "Controlling"],
    color: "#4A4A4A",
    wings: [
      { 
        number: 7, 
        name: "The Maverick", 
        description: "The 8w7 is more energetic, extroverted, and adventurous. They are often more focused on new experiences and intensity.", 
        longDescription: "The Maverick. This wing brings a more energetic, extroverted, and adventurous quality to the Type Eight. They are often more focused on new experiences and intensity. They tend to be more impulsive and may use their power to seek out excitement and challenge. Their desire for control is expressed through a need for freedom and stimulation.",
        keyMotivation: "Power through new experiences and stimulation.",
        behaviorExample: "Leading a high-stakes expedition to satisfy a need for both power and excitement."
      },
      { 
        number: 9, 
        name: "The Bear", 
        description: "The 8w9 is more calm, receptive, and steady. They are often more focused on maintaining their inner peace and protecting their territory.", 
        longDescription: "The Bear. This wing brings a more calm, receptive, and steady quality to the Type Eight. They are often more focused on maintaining their inner peace and protecting their territory. They tend to be more introverted and may be more patient or diplomatic than the 8w7. Their desire for control is expressed through a need for stability and protection.",
        keyMotivation: "Power through territory, stability, and protection.",
        behaviorExample: "Quietly but firmly defending family privacy to maintain control and stability."
      }
    ],
    relationships: {
      integration: { type: 2, description: "In growth, Eights become more open-hearted, caring, and protective of others, moving toward the Helper's nurturing energy." },
      disintegration: { type: 5, description: "Under stress, Eights can become secretive, detached, and fearful, moving toward the Investigator's withdrawal." },
      compatibility: "Eights often pair well with Twos (softness) and Fives (intellectual respect).",
      communicationStyle: "Direct, assertive, and focused on honesty and decisive action.",
      conflictStyle: "May become confrontational or domineering to maintain control and protect vulnerability.",
      supportNeeds: "Needs strength, honesty, and a partner who can stand their ground.",
      growthAdvice: [
        "Practice showing your vulnerability and softer side to trusted people.",
        "Learn to use your power to empower and protect others gently.",
        "Recognize that true strength includes the ability to be gentle.",
        "Practice listening and considering others' perspectives before acting.",
        "Admit when you are wrong and apologize sincerely.",
        "Learn to delegate and trust others' competence.",
        "Practice patience and restraint in frustrating situations.",
        "Connect with your own feelings of fear or sadness."
      ],
      redemptionType: 2,
      avoidType: 5,
      redemptionExplanation: "Type 2 brings warmth, empathy, and nurturing, helping Type 8 connect with their softer, more vulnerable side.",
      avoidExplanation: "Type 5's detachment and withdrawal can feel like a rejection or a challenge to Type 8's need for connection and control."
    },
    longDescription: "Type Eights, 'The Challengers,' are powerful, assertive, and self-confident. They are driven by a need to protect themselves and be in control of their own lives. Eights have a strong sense of justice and are often the first to stand up for the underdog. They value strength and directness and have little patience for weakness or deceit. At their best, Eights are heroic, magnanimous, and inspiring leaders who use their power to protect and empower others. When they are struggling, however, they can become domineering, confrontational, and egocentric, using their strength to intimidate others and maintain a sense of invulnerability.",
    animal: "Tiger / Bear (Symbolizing strength and protection)",
    animalImage: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to be vulnerable and to use my strength to protect the weak.",
    redemption: "Surrendering the need for control and allowing their 'inner child' to be held and loved.",
    characterChange: ["Admitting weakness", "Practicing gentleness", "Waiting before reacting", "Developing empathy"],
    symbol: "Fist / Mountain (Strength and Unshakeable Presence)",
    symbolImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    saint: "St. Joan of Arc (Courage and strength in divine service)",
    saintImage: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "The Lord is my strength and my shield. (Psalm 28:7)",
    happinessPath: "Finding true power in vulnerability and deep, heart-centered connection.",
    familyLife: "Eights are the 'providers' and 'protectors.' They create a home that feels like a fortress, where their loved ones are safe and supported. They are strong parents who teach their children self-reliance and honesty, but they can be domineering and struggle with showing their softer side.",
    intimacy: "In relationships, Eights are fiercely loyal and protective. They show love through their strength and by standing up for their partner. They value honesty and directness, but they may struggle with vulnerability, fearing that being 'soft' will make them weak.",
    sexuality: "Sexuality for Eights is often an intense and powerful experience. They value passion, directness, and a partner who can meet their intensity. They need to learn that true intimacy requires surrender and the willingness to be vulnerable.",
    lifestyle: "Assertive, powerful, and focused on self-reliance. They value strength, directness, and items that are high-quality and signal power. They prefer a lifestyle that allows them to be in control and make a significant impact.",
    spiritualLife: "Finding God as a protector and a source of true strength. Learning to surrender and be vulnerable before the divine. They are drawn to spiritual practices that emphasize justice, truth, and the transformative power of love.",
    socialLife: "Protective and loyal leaders. They are direct and value honesty and strength in their friends.",
    fortunes: "High success in leadership and executive roles. They find wealth through decisive action and protecting their interests.",
    famousPeople: ["Martin Luther King Jr.", "Winston Churchill", "Franklin D. Roosevelt", "Muhammad Ali", "Serena Williams", "Toni Morrison"]
  },
  {
    number: 9,
    name: "The Peacemaker",
    tagline: "The Easygoing, Self-Effacing Type",
    headerImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    description: "Nines are accepting, trusting, and stable. They are usually creative, optimistic, and supportive, but can also be too willing to go along with others to keep the peace.",
    coreFear: "Loss and separation",
    coreDesire: "To have inner stability and 'peace of mind'",
    keyMotivations: "Want to create harmony in their environment, to avoid conflicts and tensions, to preserve things as they are, to resist whatever would upset or disturb them.",
    traits: ["Receptive", "Reassuring", "Complacent", "Resigned", "Accepting", "Trusting", "Stable", "Easygoing", "Peaceful", "Patient", "Supportive", "Unpretentious"],
    strengths: ["Accepting", "Trusting", "Stable", "Creative", "Optimistic", "Supportive", "Mediating", "Patient", "Unpretentious", "Peaceful", "Inclusive", "Gentle", "Harmonious"],
    weaknesses: ["Passive-aggressive", "Disconnected from needs", "Merging with others", "Apathetic", "Forgetful", "Stubborn", "Avoidant", "Indifferent", "Complacent", "Indecisive", "Procrastinating", "Numb"],
    color: "#9B9B9B",
    wings: [
      { 
        number: 8, 
        name: "The Referee", 
        description: "The 9w8 is more assertive, outgoing, and direct. They are often more focused on protecting their peace through strength.", 
        longDescription: "The Referee. This wing brings a more assertive, outgoing, and direct quality to the Type Nine. They are often more focused on protecting their peace through strength. They tend to be more grounded and may be more willing to engage in conflict if it means preserving their overall harmony. Their desire for peace is flavored by a need for power.",
        keyMotivation: "Peace through strength and firm boundaries.",
        behaviorExample: "Firmly setting a boundary to avoid being disturbed and preserve their inner harmony."
      },
      { 
        number: 1, 
        name: "The Dreamer", 
        description: "The 9w1 is more principled, orderly, and idealistic. They are often more focused on inner perfection and moral correctness.", 
        longDescription: "The Dreamer. This wing brings a more principled, orderly, and idealistic quality to the Type Nine. They are often more focused on inner perfection and moral correctness. They tend to be more introverted and may have a more scholarly or refined approach to their peacemaking. Their desire for peace is flavored by a need for integrity.",
        keyMotivation: "Peace through integrity and moral correctness.",
        behaviorExample: "Meticulously organizing a home to create a sense of inner calm and moral order."
      }
    ],
    relationships: {
      integration: { type: 3, description: "In growth, Nines become more self-developing, energetic, and productive, moving toward the Achiever's goal-oriented action." },
      disintegration: { type: 6, description: "Under stress, Nines can become anxious, suspicious, and reactive, moving toward the Loyalist's defensive energy." },
      compatibility: "Nines pair well with Sixes (security) and Threes (motivation and drive).",
      communicationStyle: "Gentle, inclusive, and focused on maintaining harmony and peace.",
      conflictStyle: "May become passive-aggressive or withdraw to avoid conflict and maintain inner calm.",
      supportNeeds: "Appreciates a non-demanding presence and support for their own voice and needs.",
      growthAdvice: [
        "Practice identifying and expressing your own opinions and desires.",
        "Learn to engage in healthy conflict rather than avoiding it.",
        "Develop a sense of your own worth and importance in the world.",
        "Take active steps toward your goals rather than drifting.",
        "Practice physical exercise to wake up your energy.",
        "Set clear boundaries and learn to say 'no' when needed.",
        "Acknowledge your own anger and use it as a source of energy.",
        "Focus on your own life and priorities rather than merging with others."
      ],
      redemptionType: 3,
      avoidType: 6,
      redemptionExplanation: "Type 3 brings energy, motivation, and goal-oriented action, helping Type 9 wake up to their own life and potential.",
      avoidExplanation: "Type 6's anxiety and suspicion can disturb Type 9's sense of inner peace and harmony."
    },
    longDescription: "Type Nines, 'The Peacemakers,' are the most easygoing and stable type. They are driven by a need for inner stability and harmony. Nines are naturally accepting, trusting, and supportive, often acting as mediators in conflicts. They have a unique ability to see all sides of an issue and value peace above all else. At their best, Nines are truly self-possessed, creative, and able to bring people together in a spirit of unity. However, their desire to avoid conflict can lead them to become complacent, passive-aggressive, and disconnected from their own needs and desires, often 'merging' with others to maintain a sense of false peace.",
    animal: "Elephant / Whale (Symbolizing peace and stability)",
    animalImage: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=80",
    prayer: "God, help me to wake up to my own life and to know that my presence matters.",
    redemption: "Claiming their own voice and realizing that their unique contribution is essential to the whole.",
    characterChange: ["Decisive action", "Physical exercise", "Expressing own opinions", "Setting boundaries"],
    symbol: "Leaf / Calm Water (Peace and Natural Flow)",
    symbolImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    saint: "St. Therese of Lisieux (The 'Little Way' of simple presence)",
    saintImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    bibleVerse: "Peace I leave with you; my peace I give you. (John 14:27)",
    happinessPath: "Engaging with life with passion, presence, and a clear sense of self.",
    familyLife: "Nines create a peaceful, harmonious home environment. They are accepting parents who go with the flow and provide a steady, reassuring presence. However, they may struggle with being 'checked out', avoiding necessary conflicts, or neglecting their own needs within the family.",
    intimacy: "In relationships, Nines are accepting and supportive. They show love through their presence and by creating a sense of peace and stability. They may struggle with expressing their own needs and desires, often 'merging' with their partner to avoid conflict.",
    sexuality: "Sexuality for Nines is often a gentle, comforting experience of connection. They value a partner who is gentle and accepting. They may struggle with being fully present and 'awake' to their own desires, often needing to be encouraged to express what they truly want.",
    lifestyle: "Easygoing, stable, and focused on harmony. They value peace, a relaxed pace of life, and items that provide comfort and a sense of well-being. They prefer a lifestyle that is low-stress and allows for connection and relaxation.",
    spiritualLife: "Finding God in the stillness and peace of the present. Learning that their presence matters and that they are a vital part of the divine whole. They are drawn to spiritual practices that emphasize meditation, nature, and the oneness of all creation.",
    socialLife: "Accepting and supportive friends. They are excellent listeners and mediators in social groups.",
    fortunes: "Success in roles requiring mediation, diplomacy, and steady support. They find fulfillment in human resources, counseling, and administration.",
    famousPeople: ["Abraham Lincoln", "Dwight D. Eisenhower", "Gerald Ford", "Ronald Reagan", "Walt Disney", "Carl Jung"]
  }
];

export const QUIZ_QUESTIONS = [
  // Type 1
  {
    id: 1,
    text: "I often feel a strong internal 'should' or 'must' regarding my behavior and the behavior of others.",
    type: 1
  },
  {
    id: 2,
    text: "I am very sensitive to errors, mistakes, and things that are 'wrong' or out of place.",
    type: 1
  },
  {
    id: 3,
    text: "I strive for perfection and can be quite critical of myself when I fall short of my standards.",
    type: 1
  },
  // Type 2
  {
    id: 4,
    text: "I find it very easy to sense what other people need and I enjoy being the one to provide it.",
    type: 2
  },
  {
    id: 5,
    text: "It is important to me that I am seen as a kind, generous, and helpful person.",
    type: 2
  },
  {
    id: 6,
    text: "I sometimes neglect my own needs because I am so focused on taking care of others.",
    type: 2
  },
  // Type 3
  {
    id: 7,
    text: "I am highly motivated by success, achievement, and being recognized for my accomplishments.",
    type: 3
  },
  {
    id: 8,
    text: "I am very conscious of my image and how I am perceived by others in professional or social settings.",
    type: 3
  },
  {
    id: 9,
    text: "I am efficient and goal-oriented, often prioritizing tasks over feelings to get things done.",
    type: 3
  },
  // Type 4
  {
    id: 10,
    text: "I often feel that I am different from others and that no one truly understands my inner world.",
    type: 4
  },
  {
    id: 11,
    text: "I am deeply in touch with my emotions and often find beauty in melancholy or sadness.",
    type: 4
  },
  {
    id: 12,
    text: "Authenticity is vital to me; I hate anything that feels 'fake' or superficial.",
    type: 4
  },
  // Type 5
  {
    id: 13,
    text: "I prefer to observe and analyze situations from a distance before getting involved.",
    type: 5
  },
  {
    id: 14,
    text: "I value my independence and privacy highly, and I need plenty of time alone to recharge.",
    type: 5
  },
  {
    id: 15,
    text: "I am driven by a need to understand how things work and to master complex systems of knowledge.",
    type: 5
  },
  // Type 6
  {
    id: 16,
    text: "I am often scanning my environment for potential risks or things that could go wrong.",
    type: 6
  },
  {
    id: 17,
    text: "Loyalty is one of my highest values; I am very committed to my friends, family, and beliefs.",
    type: 6
  },
  {
    id: 18,
    text: "I often seek reassurance or guidance from trusted authorities or groups when making decisions.",
    type: 6
  },
  // Type 7
  {
    id: 19,
    text: "I am always looking for new and exciting experiences to keep myself from getting bored.",
    type: 7
  },
  {
    id: 20,
    text: "I tend to be optimistic and try to reframe negative situations into positive ones quickly.",
    type: 7
  },
  {
    id: 21,
    text: "I hate feeling trapped or limited by rules and routines that stifle my freedom.",
    type: 7
  },
  // Type 8
  {
    id: 22,
    text: "I am very direct and assertive; I have no problem standing up for myself or others.",
    type: 8
  },
  {
    id: 23,
    text: "It is important to me to be in control of my own life and to resist being controlled by others.",
    type: 8
  },
  {
    id: 24,
    text: "I have a strong sense of justice and will fight fiercely for the underdog or those being treated unfairly.",
    type: 8
  },
  // Type 9
  {
    id: 25,
    text: "I go to great lengths to avoid conflict and maintain harmony in my relationships.",
    type: 9
  },
  {
    id: 26,
    text: "I am generally easygoing and accepting, often going along with others' plans to keep the peace.",
    type: 9
  },
  {
    id: 27,
    text: "I sometimes find it hard to know what I want because I am so focused on keeping others comfortable.",
    type: 9
  },
  {
    id: 28,
    text: "I often feel a sense of responsibility to fix things that are broken or incorrect.",
    type: 1
  },
  {
    id: 29,
    text: "I feel most valued when I am needed by others.",
    type: 2
  },
  {
    id: 30,
    text: "I often feel like I need to be 'on' and performing to be accepted.",
    type: 3
  },
  {
    id: 31,
    text: "I am often drawn to the dramatic and the intense in life.",
    type: 4
  },
  {
    id: 32,
    text: "I feel drained by too much social interaction and need time alone to process.",
    type: 5
  },
  {
    id: 33,
    text: "I often feel anxious when I don't know what to expect in a situation.",
    type: 6
  },
  {
    id: 34,
    text: "I am always looking for the next exciting thing to do.",
    type: 7
  },
  {
    id: 35,
    text: "I am not afraid to be direct and confrontational if I feel I am being treated unfairly.",
    type: 8
  },
  {
    id: 36,
    text: "I often feel like my own needs don't matter as much as maintaining peace.",
    type: 9
  }
];
