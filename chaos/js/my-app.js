// Initialize your app
var myApp = new Framework7({
	material: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main');

var currentTab = "1";

var chaosList = ["Eureka - Each player may put any number of permanent cards from their hand onto the battlefield.",
				"Air Strike - Put three 2/1 white Bird tokens with flying and haste onto the battlefield. At the beginning of the next cleanup step, sacrifice those tokens.",
				"Reminisce - Shuffle your graveyard into your library.",
				"World - Roll in &lt;World>, replacing any existing rolls.",
				"Footbottom Feast - Put any number of creature cards from your graveyard on top of your library. Draw a card.",
				"Tranquility - Destroy all enchantments.",
				"Ancest-roll Recall - Roll 3 times, putting all three onto the stack.",
				"Call Your Shot - Choose a number. Roll 1dX, where X can't be less than 3. If you rolled the chosen number, you draw X cards and target opponent discards X cards.",
				"Tainted Energy - Choose one: you lose 1d6 life, or target opponent gains 1d6 life.",
				"One with Nothing - Discard your hand.",
				"Secret Cache - Reveal the top card of your library. If it's a permanent card, put it onto the battlefield. Otherwise, you lose 1 life, put that card into your graveyard, and repeat this process. If your library's empty, tough luck, you're out of the game.",
				"Exhume - Each player puts a creature card from their graveyard onto the battlefield.",
				"Tranquil Domain - Destroy all non-Aura enchantments.",
				"Mommy's Touch - Target creature gains protection from a color of your choice. (This effect doesn't end.)",
				"Last Rites - Discard any number of cards from your hand. Look at target opponent's hand and choose that many cards from it. That player discards those cards.",
				"tnahC s'mirO - You can't cast spells this turn. If any player pays {W} or {3}, your creatures can't attack this turn either.",
				"Krosan Forest - All players put cards from the top of their libraries into their graveyards until they have threshold (7 cards in graveyard) or their libraries are empty. Players who already have threshold do nothing.",
				"Balance - Except the player who controls the fewest lands, each player sacrifices lands until all players control the same number of lands as the player who controls the fewest. Players do the same for creatures and for cards in hand.",
				"Ancestral Recall - Target player draws 3 cards.",
				"eugitaF - You can't draw cards this turn.",
				"Terminate - Destroy target creature. It can't be regenerated.",
				"Prosperity - All players draw 1d8 cards.",
				"Enlightened Tutor - Search your library for an artifact or enchantment card and reveal it. Shuffle your library, then either pay {W} or {3} to put the card in your hand, or else put it on top of your library.",
				"Reins of Power - Exchange control of all creatures you control and all creatures an opponent controls until end of turn. They gain haste until end of turn.",
				"Crimson Hellflame - You may pay {R} or {2} as many times as you like. Deal that much damage to target creature.",
				"AEther Fizzle - Put all exiled cards you own into your graveyard.",
				"Syphon Soul - Deal 2 damage to each opponent and gain that much life.",
				"Demonic Tutor - Search your library for a card and put it in your hand, then shuffle.",
				"Shatter - Destroy target artifact.",
				"Solid Fog - Creatures can't attack until your next turn or until you leave the game.",
				"RollFork - Get a RollFork counter. Sacrifice RollFork to copy any roll. You choose all new targets.",
				"Better Off Dead - Put a creature card from your graveyard onto the battlefield under target opponent's control.",
				"Nevinyrral's Lil' Disk - Each player sacrifices a creature, an enchantment, and an artifact.",
				"Rumbling Crumble - Destroy all artifacts. For each artifact destroyed, its controller gains life equal to its converted mana cost.",
				"Beats Unbeaten - Search your library for up to three creature cards and reveal them. An opponent chooses one of them and you put it into your graveyard. You shuffle one of the remaining cards into your library. Put the rest into your hand.",
				"Storm Seeker - Deal 1 damage to target player for each card in their hand.",
				"Collective Unconscious - Draw a card for each creature you control.",
				"Chaos Catalog - Roll twice, then choose one roll to ignore. Put the other roll onto the stack.",
				"Lightning Helix - Deal 3 damage to target creature or player. Gain 3 life. If you really needed that, scream nonstop for the next minute and automatically win whatever else you were doing.",
				"Essence Vortex - Destroy target creature unless its controller pays life equal to its toughness.",
				"Stupor - Target opponent discards a card at random, then chooses and discards a card.",
				"Braingeyser - Target player draws 1d6 cards.",
				"Stormbind - Discard a card at random. If you do, deal 2 damage to target creature or player and you may pay {2} to repeat this process.",
				"Necrologia - Pay any amount of life and draw that many cards. Skip your draw step this turn.",
				"Earthquake - Each player and creature without flying takes 1d6 damage.",
				"Stream of Life - Target player gains 1d10 life.",
				"Fumarole - Destroy target land and target creature and you lose 3 life.",
				"Chaos Lore - Search your library for either two basic land cards or one nonbasic land card, and put them onto the battlefield. Shuffle your library afterwards.",
				"Winds of Change - Each player shuffles all the cards in their hand into their library, then draws that many cards.",
				"Wacky III - Roll 1d3 times in &lt;Wacky>.",
				"Polymorph - Destroy target creature. That creature's controller reveals cards in his or her library until a creature card is revealed, puts that card onto the battlefield, and shuffles the rest into their library.",
				"Heartbeat of Spring - All lands produce an additional mana of the appropriate type when tapped for mana this turn.",
				"Portent - Look at the top 3 cards of target player's library. Put those cards back on top of that library in any order. You may then have that player shuffle their library. Draw a card.",
				"Revenge is Sweet - Sacrifice a permanent. If you do, destroy a permanent that shares a type with it.",
				"Soul Leech - Deal 1 damage to up to 3 targets. Gain 1 life for each damage successfully dealt in this way.",
				"Stasis - Players skip their untap steps. This effect stops at the end of each turn unless the active player pays {U} or {3} to keep it going through the next turn.",
				"Pity - If a player has less life than any other, that player gains 5 life.",
				"Creeping Mold - Destroy target artifact, land, or enchantment.",
				"Mutual Betrayal - Look at target opponent's hand and choose a card from it. They look at your hand and choose a card from it. Exchange cards.",
				"Chain Lightning - Deal 3 damage to target creature or player. That player or that creature's controller may pay {R}{R} or {4} to copy this roll and choose a new target for the copy.",
				"Mana Short - Tap all lands you control. Lands you control don't untap during your untap step this turn.",
				"Rolling Thunder - Deal 1d6-1 damage divided any way you choose among any number of creatures and/or players.",
				"Illicit Auction - Each player may bid life for control of target creature, or a 3/3 Goblin token if there are no creatures. The bidding starts at 0 and proceeds in turn order. When no player wants to top the high bid, the high bidder loses that much life and gains control of the creature or the token.",
				"World++ - Roll in &lt;World>, keeping the existing rolls active.",
				"Abeyance - Until end of turn, opponents can't cast spells or activate abilities.",
				"Illusions of Grandeur - Gain 20 life and 4 Illusions counters. At the beginning each of your upkeeps, if you have any Illusions counters, remove one. When the last Illusions counter is removed, lose 20 life.",
				"Hellbent Fires - Deal 1 damage to target creature or player. If you have no cards in hand, instead deal 4 damage to it and you draw a card.",
				"Proclamation of Rebirth - All creatures in all graveyards with toughness less than or equal to 1d6 are returned to the battlefield under their owner's control.",
				"Wacky - Roll in &lt;Wacky>.",
				"Personal - Roll in &lt;Personal>.",
				"Fighting a Legend - Each opponent rolls in &lt;Personal>.",
				"Reclaim - Put target card from your graveyard on top of your library. You may either pay {G} or {3} to put the card in your hand.",
				"Prophetic Bolt - Deal 4 damage to target creature or player. Look at the top 4 cards of your library. Put one of those cards into your hand and the rest on the bottom of your library.",
				"Hymn to Tourach - Target player discards 2 cards at random.",
				"RollShunt - Get a RollShunt counter. Sacrifice the counter to change any number of targets on any chaos roll.",
				"Agonizing Memories - Look at target player's hand and choose two cards from it. Put those cards on top of that player's library in any order.",
				"Time Crawl - Pass the dice, your turn is over. Put a turn counter in the Time Crawl Jackpot.",
				"Natural Order - Sacrifice a creature. If you do, search your library for a creature card of the same color and put that card onto the battlefield. Then shuffle your library.",
				"Relentless Assault - After your first combat phase this turn, untap all creatures that attacked this turn. You get an additional combat phase this turn.",
				"Demystify - Destroy target enchantment.",
				"Pyroclasm - All creatures take 1d6 damage.",
				"Circle Shield - Get 3 shield counters. If you would take damage and you still have a shield counter, remove a shield counter instead.",
				"Impulse - Look at the top 1d6+1 cards of your library. Put one of them into your hand and the rest on the bottom of your library.",
				"Temporal Spring - Put target permanent on top of its owner's library.",
				"Gamble - Search your library for a card, put that card into your hand, then discard a card at random. Then shuffle your library.",
				"Vindicate - Destroy target permanent.",
				"Rick - You got Rick rolled! Lose 5 life and sacrifice a creature.",
				"Wacky - Roll in &lt;Wacky>.",
				"Forget - Target player discards two cards, then draws as many cards as they discarded this way.",
				"Small command - Choose two: destroy target enchantment, or draw a card, or target player discards a card, or deal 1 damage to target creature, or put a 1/1 green Squirrel creature token onto the battlefield.",
				"Ancest-roll Recall - Roll 3 times, putting all three onto the stack.",
				"Windows of Opportunity - Tap all permanents target opponent controls. At end of turn, tap all permanents you control.",
				"Energy Bolt - Choose one: Deal 1d6 damage to target player, or gain 1d6 life.",
				"Meditate - Skip your next turn and draw 4 cards.",
				"Tremble - Each player sacrifices a land.",
				"Jokulhaups Light - Each player sacrifices a land, a creature, and an artifact.",
				"Cone of Flame - Choose three target creatures and/or players. Deal 1 damage to the first, 2 damage to the second, and 3 damage to the third.",
				"Fact or Fiction - Reveal the top five cards of your library. An opponent separates those cards into two face-up piles. Put one pile into your hand and the other into your graveyard.",
				"Happy Balance - Using the cards from the top of their libraries, each player equalizes hand size, then number of lands, then number of creatures to the highest amount among all players. Players shuffle unused revealed cards into their libraries.",
				"Happy Land - Choose one: Roll in &lt;World> replacing any existing rolls; or roll in &lt;Wacky>; or roll in &lt;Personal>; or roll in &lt;Chaos>.",
				"Confiscate - Gain control of target permanent.",
				"CounterRoll - Get a CounterRoll counter. Sacrifice CounterRoll to counter any roll.",
				"Flux - Each player discards any number of cards, then draws that many cards. You draw an additional card.",
				"Personal - Roll in &lt;Personal>.",
				"Evacuation - Return all creatures to their owners' hands.",
				"Wheel of Fortune - Each player discards their hand, then draws 7 cards.",
				"Underworld Bargain - Roll 1d6. Distribute that many card draws among any combination of players of your choice. For each card you draw, take 2 damage. For each card drawn by an opponent, that player takes 1 damage.",
				"Game of Chaos - Choose target opponent. Flip a coin; loser of the flip takes 2 damage. Winner decides to flip again for double damage, or to stop.",
				"Master Chef - Choose one: Get a CounterRoll counter (Sacrifice CounterRoll to counter any roll); or get a RollFork counter (Sacrifice RollFork to copy any roll. You choose all new targets).",
				"Twi-Lite Call - Each player puts up to 2 creature cards from their graveyard onto the battlefield.",
				"Manabarbs - Whenever a player taps a land for mana this turn, they take 1 damage.",
				"Cannibalism - Choose two target creatures controlled by the same player. That player sacrifices one of those creatures. Put two +1/+1 counters on the other.",
				"Wacky - Roll in &lt;Wacky>.",
				"Stone Rain - Destroy target land.",
				"Whim of Volrath - Change the text of target permanent by replacing all instances of one color word or basic land type with another.",
				"Consume Spirit - Deal 1d6 damage to target creature or player. You gain that much life.",
				"Desperate Times - Look at the top 3 cards of your library. Put one into your hand and the other two into your graveyard. Roll again.",
				"Clone - Put a token onto the battlefield that's a copy of target creature.",
				"Patience - Lose 5 life and gain and 3 Focus counters. At the beginning of your upkeep, if you have any Focus counters, remove one. When the last Focus counter is removed, gain 10 life.",
				"Price of Immortality - Discard a card. You gain 6 life.",
				"World of Bums - End the effects of all active effects from &lt;World>.",
				"Giant Growth - Roll 1d8. Target creature gets +X/+X until end of turn where X is the die roll.",
				"Ill-Gotten Gains - Each player discards their hand, then returns up to 3 cards from their graveyard to their hand.",
				"Mindslavee - Roll twice without resolving either. An opponent chooses a roll for you to ignore, then you put the remaining roll on the stack but that player makes all decisions the remaining roll calls for.",
				"Regrowth - Return target card from your graveyard to your hand.",
				"Chaos Storm - Roll twice, putting both onto the stack. From now on, the turn order is reversed if there are 3 or more players.",
				"CounterRoll - Get a CounterRoll counter. Sacrifice CounterRoll to counter any roll.", 
				"rekeeS mrotS - Take 1 damage for each card in your hand.",
				"Price of Strength - Put two +1/+1 counters on each creature you control. You lose 4 life.",
				"Global Stream of Life - Each player gains 1d20 life.",
				"Disenchant - Destroy target artifact or enchantment.",
				"Congregate - Gain 2 life for each creature on the battlefield.",
				"Gift of the Magi - Choose one: Gain 3 life; or draw 3 cards; or add 3 mana of any color to your mana pool at the beginning of your next main phase; or deal 3 damage to any target; or put a 3/3 green Beast creature token onto the battlefield.",
				"RollFork - Get a RollFork Counter. Sacrifice RollFork to copy any roll. You choose all new targets.",
				"Price of Power - Sacrifice a land. Deal 4 damage to any target.",
				"World++ - Roll in &lt;World>, keeping the existing rolls active.",
				"Pillage - Destroy target artifact or land.",
				"Stronghold Discipline - Each player loses 1 life for each creature they control.",
				"Soothing Balm - Target player gains 5 life.",
				"Topple - Exile target creature with the greatest power among creatures on the battlefield.",
				"Threaten - Untap target creature and gain control of it until end of turn. It gains haste until end of turn.",
				"Gerrard's Wisdom - You gain 2 life for each card in your hand.",
				"Peace Talks - Until your next turn or until you leave the game, creatures can't attack and players have shroud.",
				"Scar - Put 1d4 -1/-1 counters on target creature.",
				"Truce - Each player chooses one: they draw 2 cards, or they draw a card and gain 2 life, or they gain 4 life.",
				"Meet in the Middle - If you have more than 4 cards in hand, discard cards until you have 4. If you have less than 4 cards in hand, draw cards until you have 4 or your library runs out, whichever comes first.",
				"Land Ho! - All players may put up to 3 land cards from their hand and/or graveyard onto the battlefield.",
				"Unearth - Return a creature card with converted mana cost of 3 or less from your graveyard to the battlefield.",
				"Blue - When you cast your next spell, counter it. Then you get a CounterRoll counter (Sacrifice CounterRoll to counter any roll).",
				"Wacky III - Roll 1d3 times in &lt;Wacky>.",
				"Control Magic - Gain control of target creature.",
				"Intimidation - Creatures can't attack you until your next turn.",
				"Lightning Round - Until your next turn, whenever a player casts a spell, that player draws a card.",
				"Unhinge - Target player discards a card. Draw a card.",
				"Personal - Roll in &lt;Personal>.",
				"Calm Before the Storm - Until your next turn, players skip their chaos phases. Then, starting from your next turn, until the turn after that, there's an extra chaos phase each turn.",
				"Chain of Smog - Target player discards a card. That player may pay {B} or {3} to copy this roll and choose a new target for the copy.",
				"Yawgmoth's Will - Until end of turn, you may play cards in your graveyard. If a card would be put into your graveyard this turn, exile that card instead.",
				"Triple World - Roll in &lt;World> 3 times, replacing any existing rolls but all remaining active concurrently.",
				"CounterRoll - Get a CounterRoll counter. Sacrifice CounterRoll to counter any roll.",
				"Swords to Plowshares - Exile target creature. Its controller gains life equal to its power.",
				"Price of Support - Sacrifice a creature, then put four 1/1 Spirit creature tokens with all colors onto the battlefield.",
				"Timetwister - Each player shuffles their hand and graveyard into their library, then draws seven cards.",
				"Misfortune - An opponent chooses one: You put a +1/+1 counter on each creature you control and gain 4 life; or that player puts a -1/-1 counter on each creature he or she controls and takes 4 damage.",
				"Hymn of Rebirth - Put target creature card from any graveyard onto the battlefield under your control.",
				"Sift - Draw 3 cards, then discard a card.",
				"RollFork - Get a RollFork Counter. Sacrifice RollFork to copy any roll. You choose all new targets.",
				"Tinker - Sacrifice an artifact. If you do, search your library for an artifact card and put it onto the battlefield. Shuffle your library afterwards.",
				"Helm of Obedience - Put the top card of target opponent's library into their graveyard. Repeat this process until you've put 1d6 cards or a creature card into that graveyard, whichever occurs first. If the last card put into the graveyard this way is a creature card, put it onto the battlefield under your control.",
				"Balloon - Each time you tap a land for mana this turn, gain 1 life.",
				"Lucky Us - Each player reveals the top card of their library. If that card is a permanent card, they put it onto the battlefield. Otherwise, they cast it without paying its mana cost if able.",
				"Mystical Tutor - Search your library for an instant or sorcery card and reveal it. Shuffle your library, then either pay {U} or {3} to put the card in your hand, or else put it on top of your library.",
				"Personal - Roll in &lt;Personal>.",
				"Lurking Evil - Put a 4/4 black Horror creature token with flying onto the battlefield. You lose half your life, rounded up.",
				"Power Surge - Take 1 damage for each untapped land you control.",
				"Pariah - Target creature becomes a pariah until your next turn. As long as the pariah is still on the battlefield, any damage that would be dealt to you is dealt to it instead.",
				"Wacky - Roll in &lt;Wacky>.",
				"Chaos Storm - Roll twice, putting both onto the stack. From now on, the turn order is reversed if there are 3 or more players.",
				"Innocent Blood - Each player sacrifices a creature.",
				"Miser's Luck - Name a roll. Roll again on the chaos list. If it's the named roll, you gain 20 life and draw 3 cards. (Whatever you rolled still goes on the stack in any case.)",
				"Mind Sword - Each player discards a card.",
				"Dramatic Entrance - Choose a creature card in your hand. You may put that card onto the battlefield if you pay {G}{G} or {X}, where X is its converted mana cost.",
				"Battlegrowth - Put 1d4 +1/+1 counters on target creature.",
				"Blessed Wine - Gain 1 life. Draw a card.",
				"Char - Deal 4 damage to target creature or player and 2 damage to yourself.",
				"Vampiric Tutor - You lose 2 life. Search your library for a card. Shuffle your library, then either pay {B} or 2 life to put the card in your hand, or else put it on top of your library.",
				"Cloak of Mists - Target creature becomes unblockable.",
				"World - Roll in &lt;World>, replacing any existing rolls.",
				"Time Walk - Take an extra turn after this one.",
				"Wanna Bet? - Choose an opponent and a permanent they control. They choose a permanent you control. Flip a coin. The winner gains control of the loser's permanent.",
				"Hurricane - Each player and each creature with flying takes 1d6 damage.",
				"Lat-Nam's Legacy - Shuffle a card from your hand into your library. Draw 2 cards.",
				"Magical Sleight - Change the text of target permanent by replacing all instances of one basic mana symbol with another basic mana symbol. (The basic symbols are W, U, B, R, and G. Hybrid, snow, and colorless symbols don't count.)",
				"Goatnap - Gain control of target Goat. Yeah, that probably didn't do much.",
				"Red - When an opponent casts their next instant or sorcery spell, they copy it and may choose new targets for the copy. Then you get a RollFork counter (Sacrifice RollFork to copy any roll. You choose all new targets).",
				"AEther Snap - Put all counters and tokens in the \"does not exist\" zone. (Then they cease to exist.)",
				"Fall Harvest - Sacrifice a land, then gain 1 life for each land you control.",
				"Steal Artifact - Gain control of target artifact.",
				"Feast or Famine - Choose one: Destroy target nonblack, nonartifact creature; or put a 2/2 black Zombie token onto the battlefield.",
				"Heroic Command - Choose two: gain 10 life, or gain 10 life, or put a 4/4 white Giant creature token onto the battlefield, or put a 4/4 white Giant creature token onto the battlefield, or destroy target permanent, or destroy target permanent."];
				
var worldList = ["Mirrodin - All permanents are artifacts in addition to their other types. Mana can be spent as though it were mana of any color.",
				 "Mirari Concentrate - All creatures get +1/+1. Whenever a player taps a land for mana, they add an additional mana of any type it produced to their mana pool. Whenever a player casts an instant or sorcery spell, they may pay {3} to copy that spell and may choose new targets for the copy.",
				 "Mass Hysteria - All creatures have haste.",
				 "Dovescape - Whenever a player casts a noncreature spell, counter it and they get X 1/1 white and blue Bird tokens with flying, where X is the spell's converted mana cost.",
				 "Howling Mine - At the beginning of each player's draw step, that player draws an extra card.",
				 "Cursed Rod - All creatures lose all abilities.",
				 "Urza's Hotel and Casino - Sacrifice three permanents: Roll on the chaos list. Any player may activate this ability.",
				 "Bottomless Pit - At the beginning of each player's upkeep, that player discards a card at random.",
				 "Grand Melee - All creatures have vigilance and must attack and block each turn if able.",
				 "Aluren - Any player may play creature cards with converted mana cost 3 or less without paying their mana costs and as though they had flash.",
				 "Crucible of Everything - Players may play cards from their graveyards.",
				 "Eye of the Storm - When an instant or sorcery spell resolves, it goes on Eye of the Storm instead of the graveyard or anywhere else. When a player casts an instant or sorcery card, they can also cast copies of any of the cards on Eye of the Storm without paying their mana costs.",
				 "Propaganda - Creatures can't attack unless their controller pays {2} for each attacking creature.",
				 "Vedalken Orrery - All nonland cards have flash.",
				 "City of Solitude - Players can play spells and abilities only during their own turn.",
				 "Sulfuric Vortex - Players can't gain life. At the beginning of each player's upkeep, that player takes 2 damage.",
				 "Chaos World - There is an additional chaos phase after the first one each turn.",
				 "Lorwyn Block - At the beginning of each player's upkeep, everyone clashes. Each player who wins the clash puts a 2/2 creature token with all creature types and colors onto the battlefield.",
				 "Underworld Nightmares - Whenever a player draws a card, they lose 3 life.",
				 "Magic 1999 - Combat damage uses the stack. (You can assume all the other changes needed to make that work happen too.)"];
				 
var personalList = ["Ajani - Gain 10 life and put a +1/+1 counter on all of your creatures.",
					"Jace - You draw 4 cards and everyone else draws 2 cards.",
					"Liliana - Choose a creature card from each graveyard and put them onto the battlefield under your control.",
					"Chandra - Deal 1d6+1 damage to target player, and the same amount of damage divided among any number of creatures that player controls.",
					"Garruk - Put a 6/6 green Beast token with trample onto the battlefield.",
					"Mark Rosewater - Roll 3 times on the chaos list. Don't resolve any of them, but instead put each one into your hand in the form of an instant card that costs {0}.",
					"Ferrett - All players may come to an agreement on how to distribute 5 points of damage across any number of creatures and/or players. If they can't agree on a deal, you gain 5 life and draw a card.",
					"Ben Bleiweiss - When you tap a basic land for mana this turn, add one mana to your mana pool of any type that land produced. Put two +1/+1 counters on each of your creatures that have converted mana costs of 1.",
					"Mike Flores - Take another turn after this one. You know, because you just Time Walked your opponent.",
					"Devin Low - Get a dev counter. Sacrifice the counter to force any chaos roll to be rerolled, or to change one number in the text of any chaos roll by adding or subtracting up to 4.",
					"Seeker - Choose a color other than blue. Destroy all permanents of that color. Each player reveals their hand and discards all cards of that color.",
					"Sole - Each player chooses a permanent he or she controls, then sacrifices the rest.",
					"Jolt - Assemble 2 Contraptions. Until the next time you play a spell, at the end of each turn, assemble a Contraption.",
					"Oltanya - You get a bitch counter. When an opponent plays a spell, the player with the bitch counter can give it to the spell's controller and counter that spell.",
					"PMega - Each creature that's in play right now loses all abilities and becomes a 2/2 green Bear.",
					"Elspeth - Target creature becomes indestructible (forever).",
					"Tezzeret - Choose one - search your library for an artifact card, reveal it, put it into your hand, and shuffle your library; or put a buzz counter on each artifact you control. Permanents with buzz counters have \"Remove a buzz counter: Untap this permanent.\"",
					"Sorin - For each opponent, choose one - that player loses 4 life and you gain 4 life; or you control that player's next turn.",
					"Sarkhan - Put a Form of the Dragon enchantment token onto the battlefield. It has \"Creatures without flying can't attack you\", \"At the beginning of your upkeep, this deals 5 damage to target creature or player\", and \"At the beginning of each end step, your life total becomes 5.\"",
					"Nissa - Put three 1/1 green Elf tokens onto the battlefield. They have \"T: Add G to your mana pool.\""];

					
var wackyList = ["Time Stretch - Take 2 extra turns after this one.", 
				 "Musical Chairs - All players get up and move one seat in the direction the turns are proceeding, leaving their cards and life total for the player who takes their place.",
				 "Trick or Treat - All cards from graveyards are returned to play if possible, or else (instants, sorceries, and Auras with nothing to enchant) they go to their owners' hands.",
				 "Master of Chaos - Until your next turn, you choose all targets for all chaos rolls.",
				 "Dibs - Until end of game, you own target card in any zone that's face up or revealed. If it's in play, you don't gain control of it, just ownership.",
				 "Rainbow Vale - Put a Rainbow Vale land token into play. It has \"T: Add 1 mana of any color to your mana pool. Mana burn from mana produced this way causes you to lose 5 life.\" and \"At end of turn, if Rainbow Vale is untapped, you lose 5 life.\" and \"At the beginning of each player's turn, that player gains control of Rainbow Vale and untaps it.\"",
				 "Musical Life - Each player passes their life total to the next player in the direction the turns are proceeding.",
				 "Look at Me, I'm a Member of R&D - Either add 1 to all numbers on target permanent or subtract 1 from all numbers on that permanent.",
				 "Turn Twister - Until your next turn, after each turn randomly choose who takes the next turn.",
				 "Escape from AOL - Target land you control becomes AOL, loses its land types and abilities, and gains \"At the beginning of your upkeep, put a creature you control on AOL. Flip a coin. On heads, target player gains control of AOL. If a player destroys AOL, they gain control of all creatures on it.\"",
				 "Flagbearer - Target creature gains \"If a spell or ability can target this creature, it must do so.\"",
				 "Wrath of the Random - Destroy all permanents with a converted mana cost equal to 1d6.",
				 "Chaos Ward - Target creature gains protection from chaos rolls.",
				 "Fun Time - Roll on &lt;World> replacing any existing rolls, and roll once on each of &lt;Wacky>, &lt;Personal>, and &lt;Chaos>.",
				 "Time Wall Safe - Skip one of your phases this turn. Get a Safe counter, noting the skipped phase. Sacrifice a Safe counter at any time to take the skipped phase immediately (you're the active player for it).",
				 "nruT - Go to your end phase and proceed backwards through the order of phases and steps. When you reach your Chaos phase, roll again on the chaos list. If there are 3 or more players, reverse the turn order from now on.",
				 "Really Damn Wacky - Roll twice in &lt;Wacky> and 1d6 times on the chaos list.",
				 "Ka-Ching!!$$ - Get a Black Lotus token, a Mox Pearl token, a Mox Sapphire token, a Mox Jet token, a Mox Ruby token, a Mox Emerald token, and a Mox Diamond token (without the drawback!)",
				 "Time Crawl Jackpot! - Put a turn counter in the Time Crawl Jackpot. After this turn, you take an extra turn for each turn counter in the Time Crawl Jackpot. (There's already a counter in the jackpot at the start of the game.)"];

$$('#tab1').on('show', function () {
    currentTab = "1";
});
 
$$('#tab2').on('show', function () {
    currentTab = "2";
});
 
$$('#tab3').on('show', function () {
    currentTab = "3";
});

$$('#tab4').on('show', function () {
    currentTab = "4";
});   

$$('.floating-button').on('click', function () {
    rollRandom();
});

	$$(document).keydown(function(evt) {
		if (evt.keyCode == 32) {
			rollRandom();
		}
	});

function rollRandom() {
	var content = "";
	
	if (currentTab == 1) {
		content = chaosList[Math.floor(Math.random() * chaosList.length)];
	} else if (currentTab == 2) {
		content = worldList[Math.floor(Math.random() * worldList.length)];
	} else if (currentTab == 3) {
		content = personalList[Math.floor(Math.random() * personalList.length)];
	} else if (currentTab == 4) {
		content = wackyList[Math.floor(Math.random() * wackyList.length)];
	}
	
    document.getElementById('content' + currentTab).innerHTML = '<div class="card"><div class="card-content"><div class="card-content-inner">' + content + '</div></div></div>' + document.getElementById('content' + currentTab).innerHTML;
}