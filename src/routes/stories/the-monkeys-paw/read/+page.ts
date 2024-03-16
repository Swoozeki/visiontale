import type { Book, ParsedBook } from '$lib/models/Book';
import type { PageLoad } from './$types';
import { v4 as uuidv4 } from 'uuid';
import image1 from '$lib/assets/images/the-lottery/1.jpg';
import image2 from '$lib/assets/images/the-lottery/2.jpg';
import image3 from '$lib/assets/images/the-lottery/3.jpg';
import image4 from '$lib/assets/images/the-lottery/4.jpg';
import image5 from '$lib/assets/images/the-lottery/5.jpg';

export const load: PageLoad = ({ url }) => {
	const book: Book = {
		meta: {
			id: uuidv4(),
			title: {
				text: 'The Monkey’s Paw'
			},
			author: {
				id: uuidv4(),
				text: 'W. W. Jacobs'
			},
			publishDate: '1902'
		},
		chapters: [
			{
				title: {
					text: 'Part I'
				},
				paragraphs: [
					[
						{
							text: 'Without, the night was cold and wet, but in the small parlour of Laburnum villa the blinds were drawn and the fire burned brightly.'
						},
						{
							text: 'Father and son were at chess; the former, who possessed ideas about the game involving radical chances, putting his king into such sharp and unnecessary perils that it even provoked comment from the white-haired old lady knitting placidly by the fire.'
						}
					],
					[
						{
							text: '“Hark at the wind,” said Mr. White, who, having seen a fatal mistake after it was too late, was amiably desirous of preventing his son from seeing it.'
						}
					],
					[
						{
							text: '“I’m listening,” said the latter grimly surveying the board as he stretched out his hand. “Check.”'
						}
					],
					[
						{
							text: '“I should hardly think that he’s come tonight, ” said his father, with his hand poised over the board.'
						}
					],
					[{ text: '“Mate,” replied the son.' }],
					[
						{
							text: '“That’s the worst of living so far out,” balled Mr. White with sudden and unlooked-for violence;'
						},
						{
							text: '“Of all the beastly, slushy, out of the way places to live in, this is the worst. Path’s a bog, and the road’s a torrent. I don’t know what people are thinking about. I suppose because only two houses in the road are let, they think it doesn’t matter.'
						}
					],
					[
						{
							text: '“Never mind, dear,” said his wife soothingly; “perhaps you’ll win the next one.”'
						}
					],
					[
						{
							text: 'Mr. White looked up sharply, just in time to intercept a knowing glance between mother and son.'
						},
						{
							text: 'The words died away on his lips, and he hid a guilty grin in his thin grey beard.'
						}
					],
					[
						{
							text: '“There he is,” said Herbert White as the gate banged to loudly and heavy footsteps came toward the door.'
						}
					],
					[
						{
							text: 'The old man rose with hospitable haste and opening the door, was heard condoling with the new arrival.'
						},
						{
							text: 'The new arrival also condoled with himself, so that Mrs. White said, “Tut, tut!” and coughed gently as her husband entered the room followed by a tall, burly man, beady of eye and rubicund of visage.'
						}
					],
					[
						{ text: '“Sergeant-Major Morris, ” he said, introducing him.' },
						{
							text: 'The Sergeant-Major took hands and taking the proffered seat by the fire, watched contentedly as his host got out whiskey and tumblers and stood a small copper kettle on the fire.'
						}
					],
					[
						{
							text: 'At the third glass his eyes got brighter, and he began to talk, the little family circle regarding with eager interest this visitor from distant parts, as he squared his broad shoulders in the chair and spoke of wild scenes and doughty deeds; of wars and plagues and strange peoples.'
						}
					],
					[
						{
							text: '“Twenty-one years of it,” said Mr. White, nodding at his wife and son. “When he went away he was a slip of a youth in the warehouse. Now look at him.”'
						}
					],
					[{ text: '“He don’t look to have taken much harm.” said Mrs. White politely.' }],
					[
						{
							text: '“I’d like to go to India myself,” said the old man, “just to look around a bit, you know.”'
						}
					],
					[
						{ text: '“Better where you are,” said the Sergeant-Major, shaking his head.' },
						{ text: 'He put down the empty glass and sighning softly, shook it again.' }
					],
					[
						{
							text: '“I should like to see those old temples and fakirs and jugglers,” said the old man. “what was that that you started telling me the other day about a monkey’s paw or something, Morris?”'
						}
					],
					[{ text: '“Nothing.” said the soldier hastily. “Leastways, nothing worth hearing.”' }],
					[{ text: '“Monkey’s paw?” said Mrs. White curiously.' }],
					[
						{
							text: '“Well, it’s just a bit of what you might call magic, perhaps.” said the Sergeant-Major off-handedly.'
						}
					],
					[
						{ text: 'His three listeners leaned forward eagerly.' },
						{
							text: 'The visitor absent-mindedly put his empty glass to his lips and then set it down again.'
						},
						{ text: 'His host filled it for him again.' }
					],
					[
						{
							text: '“To look at,” said the Sergeant-Major, fumbling in his pocket, “it’s just an ordinary little paw, dried to a mummy.”'
						}
					],
					[
						{ text: 'He took something out of his pocket and proffered it.' },
						{
							text: 'Mrs. White drew back with a grimace, but her son, taking it, examined it curiously.'
						}
					],
					[
						{
							text: '“And what is there special about it?” inquired Mr. White as he took it from his son, and having examined it, placed it upon the table.'
						}
					],
					[
						{
							text: '“It had a spell put on it by an old Fakir,” said the Sergeant-Major, “a very holy man.'
						},
						{
							text: 'He wanted to show that fate ruled people’s lives, and that those who interfered with it did so to their sorrow.'
						},
						{
							text: 'He put a spell on it so that three separate men could each have three wishes from it.”'
						}
					],
					[
						{
							text: 'His manners were so impressive that his hearers were conscious that their light laughter had jarred somewhat.'
						},
						{ text: '“Well, why don’t you have three, sir?” said Herbert White cleverly.' }
					],
					[
						{
							text: 'The soldier regarded him the way that middle age is wont to regard presumptuous youth. “I have,” he said quietly, and his blotchy face whitened.'
						}
					],
					[{ text: '“And did you really have the three wishes granted?” asked Mrs. White.' }],
					[
						{
							text: '“I did,” said the sergeant-major, and his glass tapped against his strong teeth.'
						}
					],
					[{ text: '“And has anybody else wished?” persisted the old lady.' }],
					[
						{
							text: '“The first man had his three wishes. Yes,” was the reply, “I don’t know what the first two were, but the third was for death. That’s how I got the paw.”'
						}
					],
					[{ text: 'His tones were so grave that a hush fell upon the group.' }],
					[
						{
							text: '“If you’ve had your three wishes it’s no good to you now then Morris,” said the old man at last. “What do you keep it for?”'
						}
					],
					[
						{ text: 'The soldier shook his head.' },
						{
							text: '“Fancy I suppose,” he said slowly. “I did have some idea of selling it, but I don’t think I will. It has caused me enough mischief already. Besides, people won’t buy. They think it’s a fairy tale, some of them; and those who do think anything of it want to try it first and pay me afterward.”'
						}
					],
					[
						{
							text: '“If you could have another three wishes,” said the old man, eyeing him keenly, “would you have them?”'
						}
					],
					[{ text: '“I don’t know,” said the other. “I don’t know.”' }],
					[
						{
							text: 'He took the paw, and dangling it between his forefinger and thumb, suddenly threw it upon the fire.'
						},
						{ text: 'White, with a slight cry, stooped down and snatched it off.' }
					],
					[{ text: '“Better let it burn,” said the soldier solemnly.' }],
					[{ text: '“If you don’t want it Morris,” said the other, “give it to me.”' }],
					[
						{
							text: '“I won’t.” said his friend doggedly. “I threw it on the fire. If you keep it, don’t blame me for what happens. Pitch it on the fire like a sensible man.”'
						}
					],
					[
						{
							text: 'The other shook his head and examined his possession closely. “How do you do it?” he inquired.'
						}
					],
					[
						{
							text: '“Hold it up in your right hand, and wish aloud,” said the Sergeant-Major, “But I warn you of the consequences.”'
						}
					],
					[
						{
							text: '“Sounds like the ‘Arabian Nights’ ”, said Mrs. White, as she rose and began to set the supper. “Don’t you think you might wish for four pairs of hands for me.”'
						}
					],
					[
						{
							text: 'Her husband drew the talisman from his pocket, and all three burst into laughter as the Seargent-Major, with a look of alarm on his face, caught him by the arm.'
						}
					],
					[{ text: '“If you must wish,” he said gruffly, “Wish for something sensible.”' }],
					[
						{
							text: 'Mr. White dropped it back in his pocket, and placing chairs, motioned his friend to the table.'
						},
						{
							text: 'In the business of supper the talisman was partly forgotten, and afterward the three sat listening in an enthralled fashion to a second installment of the soldier’s adventures in India.'
						}
					],
					[
						{
							text: '“If the tale about the monkey’s paw is not more truthful than those he has been telling us,” said Herbert, as the door closed behind their guest, just in time to catch the last train, “we shan’t make much out of it.”'
						}
					],
					[
						{
							text: '“Did you give anything for it, father?” inquired Mrs. White, regarding her husband closely.'
						}
					],
					[
						{
							text: '“A trifle,” said he, colouring slightly, “He didn’t want it, but I made him take it. And he pressed me again to throw it away.”'
						}
					],
					[
						{
							text: '“Likely,” said Herbert, with pretended horror. “Why, we’re going to be rich, and famous, and happy. Wish to be an emperor, father, to begin with; then you can’t be henpecked.”'
						}
					],
					[
						{
							text: 'He darted around the table, pursued by the maligned Mrs White armed with an antimacassar.'
						}
					],
					[
						{
							text: 'Mr. White took the paw from his pocket and eyed it dubiously. “I don’t know what to wish for, and that’s a fact,” he said slowly. “It seems to me I’ve got all I want.”'
						}
					],
					[
						{
							text: '“If you only cleared the house, you’d be quite happy, wouldn’t you!” said Herbert, with his hand on his shoulder. “Well, wish for two hundred pounds, then; that’ll just do it.”'
						}
					],
					[
						{
							text: 'His father, smiling shamefacedly at his own credulity, held up the talisman, as his son, with a solemn face, somewhat marred by a wink at his mother, sat down and struck a few impressive chords.'
						}
					],
					[{ text: '“I wish for two hundred pounds,” said the old man distinctly.' }],
					[
						{
							text: 'A fine crash from the piano greeted his words, interrupted by a shuddering cry from the old man. His wife and son ran toward him.'
						}
					],
					[
						{
							text: '“It moved,” he cried, with a glance of disgust at the object as it lay on the floor. “As I wished, it twisted in my hand like a snake.”'
						}
					],
					[
						{
							text: '“Well, I don’t see the money,” said his son, as he picked it up and placed it on the table, “and I bet I never shall.”'
						}
					],
					[
						{
							text: '“It must have been your fancy, father,” said his wife, regarding him anxiously.'
						}
					],
					[
						{
							text: 'He shook his head. “Never mind, though; there’s no harm done, but it gave me a shock all the same.”'
						}
					],
					[
						{ text: 'They sat down by the fire again while the two men finished their pipes.' },
						{
							text: 'Outside, the wind was higher than ever, an the old man started nervously at the sound of a door banging upstairs.'
						},
						{
							text: ' A silence unusual and depressing settled on all three, which lasted until the old couple rose to retire for the rest of the night.'
						}
					],
					[
						{
							text: '“I expect you’ll find the cash tied up in a big bag in the middle of your bed,” said Herbert, as he bade them good night, “and something horrible squatting on top of your wardrobe watching you as you pocket your ill-gotten gains.”'
						}
					],
					[
						{
							text: 'He sat alone in the darkness, gazing at the dying fire, and seeing faces in it.'
						},
						{ text: 'The last was so horrible and so simian that he gazed at it in amazement.' },
						{
							text: 'It got so vivid that, with a little uneasy laugh, he felt on the table for a glass containing a little water to throw over it.'
						},
						{
							text: 'His hand grasped the monkey’s paw, and with a little shiver he wiped his hand on his coat and went up to bed.'
						}
					]
				]
			}
		]
	};
	let parsedBook: ParsedBook = [];
	parsedBook.push({
		...book.meta.title,
		id: 'title',
		type: 'title',
		track: `https://nhuydzczccoqrthocapo.supabase.co/storage/v1/object/public/prod/stories/the-monkeys-paw/speech-${parsedBook.length}.mp3`
	});
	book.chapters.forEach((chapter, c) => {
		if (chapter.title)
			parsedBook.push({
				...chapter.title,
				id: `title-c${c + 1}`,
				type: 'chapter-title',
				track: `https://nhuydzczccoqrthocapo.supabase.co/storage/v1/object/public/prod/stories/the-monkeys-paw/speech-${parsedBook.length}.mp3`
			});
		chapter.paragraphs.forEach((paragraph, p) => {
			paragraph.forEach((line, l) => {
				parsedBook.push({
					id: `c${c + 1}p${p + 1}l${l + 1}`,
					...line,
					track: `https://nhuydzczccoqrthocapo.supabase.co/storage/v1/object/public/prod/stories/the-monkeys-paw/speech-${parsedBook.length}.mp3`,
					meta: { chapter: c + 1, paragraph: p + 1, line: l + 1, total: chapter.paragraphs.length }
				});
			});
		});
	});

	const index = url.searchParams.get('index');
	return {
		book,
		parsedBook,
		meta: book.meta,
		activeExcerptIndex: index ? parseInt(index) : 0
	};
};
