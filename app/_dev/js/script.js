/*!
* hup.min.js 1.0.0
* author: Rokkido
* https://hup.rokkido.cx.ua
*/

;(function(window){

	window.hup = function(params){
		let lang = params == undefined ? '' : params.lang;
		let place = params == undefined ? '' : params.place;

		let sitesArmy;
		let sitesHumanitarian;

		// sites army
		if ( params == undefined || params.sitesArmy == undefined) {
			sitesArmy = [
				{
					title: {
						en: 'Charitable fund "Come Back Alive"',
						ua: 'Благодійний фонд "Повернись живим"',
						ru: 'Благотворительный фонд "Вернись живым"'
					},
					description: {
						en: 'One of the biggest charity funds helping Ukrainian soldiers.',
						ua: 'Один із найбільших благодійних фондів, який допомагає українським військовим.',
						ru: 'Один из крупнейших благотворительных фондов, помогающий украинским военным.',
					},
					currency: 'Fondy.eu, Swift, Cryptocurrency (BTC, ETH, USDC, USDT), UAH',
					link: 'https://www.comebackalive.in.ua/donate'
				},
				{
					title: {
						en: 'National Bank of Ukraine',
						ua: 'Національний банк України',
						ru: 'Национальный банк Украины'
					},
					description: {
						en: 'The National Bank of Ukraine opened a bank account to raise money for the army needs.',
						ua: 'Національний банк України відкрив рахунок для збирання коштів на потреби армії.',
						ru: 'Национальный банк Украины открыл счет для сбора средств на нужды армии.'
					},
					currency: 'USD, EUR, GBP, CHF, AUD, CAD, PLN, UAH',
					link: {
						en: 'https://bank.gov.ua/en/about/support-the-armed-forces',
						ua: 'https://bank.gov.ua/ua/about/support-the-armed-forces',
						ru: 'https://bank.gov.ua/en/about/support-the-armed-forces'
					}
				},
				{
					title: {
						en: 'monobank | UniversalBank',
						ua: 'monobank | UniversalBank',
						ru: 'monobank | UniversalBank'
					},
					description: {
						en: 'Funds are raised onto a single account of the National bank of Ukraine created to support the Ukrainian army.',
						ua: 'Кошти збираються на єдиний рахунок у Національному банку України, створений для підтримки української армії.',
						ru: 'Средства собираются на единый счет в Национальном банке Украины, созданный для поддержки украинской армии.'
					},
					currency: 'Any bank, Apple Pay, Google Pay',
					link: 'https://uahelp.monobank.ua'
				},
				{
					title: {
						en: 'Aid For Ukraine (cryptocurrency)',
						ua: 'Aid For Ukraine (криптовалюта)',
						ru: 'Aid For Ukraine (криптовалюта)'
					},
					description: {
						en: 'Official crypto wallets for transferring money for the Ukrainian army.',
						ua: 'Офіційні криптогаманці, куди можна переказати гроші для армії України.',
						ru: 'Официальные криптокошельки, куда можно перевести деньги для армии Украины.'
					},
					currency: 'BTC, ETH, USDT, DOT, SOL, DOGE, XMR, ICX, NEO',
					link: 'https://donate.thedigital.gov.ua'
				}
			];
		} else {
			sitesArmy = params.sitesArmy;
		}

		// sites humanitarian
		if ( params == undefined || params.sitesHumanitarian == undefined ) {
			sitesHumanitarian = [
				{
					title: {
						en: 'Red Cross',
						ua: 'Червоний Хрест',
						ru: 'Красный Крест'
					},
					description: {
						en: 'All raised funds will be used to support victims, blood donation, mobilization of volunteers and resources.',
						ua: 'Всі залучені кошти будуть використані на підтримку постраждалих, донорство крові, мобілізацію волонтерів та ресурсів.',
						ru: 'Все привлеченные средства будут использованы в поддержку пострадавших, донорство крови, мобилизацию волонтеров и ресурсов.'
					},
					currency: 'USD, EUR, UAH',
					link: {
						en: 'https://donate.redcrossredcrescent.org/ua/donate/~my-donation',
						ua: 'https://donate.redcrossredcrescent.org/ua/donate/~%D0%BC%D0%BE%D1%8F-%D0%BF%D0%BE%D0%B6%D0%B5%D1%80%D1%82%D0%B2%D0%B0',
						ru: 'https://donate.redcrossredcrescent.org/ua/donate/~my-donation'
					}
				},
				{
					title: {
						en: 'National Bank of Ukraine',
						ua: 'Національний банк України',
						ru: 'Национальный банк Украины'
					},
					description: {
						en: 'The National Bank of Ukraine opened a bank account for raising money for humanitarian help.',
						ua: 'Національний банк України відкрив рахунок для збирання коштів на гуманітарну допомогу.',
						ru: 'Национальный банк Украины открыл счет для сбора средств на гуманитарную помощь.'
					},
					currency: 'USD, EUR, GBP, CHF, AUD, CAD, PLN, UAH',
					link: {
						en: 'https://bank.gov.ua/en/about/humanitarian-aid-to-ukraine',
						ua: 'https://bank.gov.ua/ua/about/humanitarian-aid-to-ukraine',
						ru: 'https://bank.gov.ua/en/about/humanitarian-aid-to-ukraine'
					}
				},
				{
					title: 'Unchain.Fund',
					description: {
						en: 'Unchain is a charity project created by blockchain activists.',
						ua: 'Unchain — це благодійний проект, створений активістами блокчейн.',
						ru: 'Unchain — благотворительный проект, созданный активистами блокчейн.'
					},
					currency: 'BTC, ETH, BSC, Polygon, Harmony, NEAR, Avalanche, Celo, Terra, IoTeX',
					link: 'https://unchain.fund/donate'
				}
			]
		} else {
			sitesHumanitarian = params.sitesHumanitarian;
		}

		// lang
		if (lang != 'en' && lang !== 'ua' && lang !== 'ru') {
			lang = 'en';
		}

		// btn place
		if (place != 'right' && place != 'center' && place !== 'left') {
			place = 'right';
		}

		const utm = '?utm_source=HelpUkrainePopup';
		const $body = $('body');
		
		const dataText = {
			header: {
				en: 'Help Ukraine in the war with Russia',
				ua: 'Допомога Україні у війні з Росією',
				ru: 'Помощь Украине в войне с Россией'
			},
			help: {
				en: 'Whom do you want to help?',
				ua: 'Кому ви хочете допомогти?',
				ru: 'Кому вы хотите помочь?'
			}
		}

		const dataContent = [
			{
				category: 'army',
				title: {
					en: 'Help to the Ukrainian army',
					ua: 'Допомога армії України',
					ru: 'Помощь армии Украины'
				},
				name: {
					en: 'The armed forces',
					ua: 'Армія',
					ru: 'Армия'
				},
				sites: sitesArmy
			},
			{
				category: 'humanitarian',
				title: {
					en: 'Humanitarian aid',
					ua: 'Гуманітарна допомога',
					ru: 'Гуманитарная помощь'
				},
				name: {
					en: 'Humanitarian aid',
					ua: 'Гуманітарна допомога',
					ru: 'Гуманитарная помощь'
				},
				sites: sitesHumanitarian
			}
		];

		const markup = `
			<div class="hup">
				<div class="hup-wrapper">
					<div class="hup-overlay"></div>
					<div class="hup-block">
						<div class="hup-header">
							<div class="hup-back"></div>
							<span>${ getLangString(dataText.header) }</span>
						</div>
						<div class="hup-content">
							<div class="hup-section hup-section--start active">
								<div class="hup-top-img hup-bg-img hup-bg-img--emblem"></div>
								<div class="hup-title">${ getLangString(dataText.help) }</div>
								<div class="hup-items">
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;

		$body.insertAdjacentHTML('beforeend', markup); // markup to body
		
		const $popup = $('.hup');
		const $wrapper = $('.hup-wrapper');
		const $back = $('.hup-back');
		const $content = $('.hup-content');
		const $itemsStart = $('.hup-section--start .hup-items');

		dataContent.forEach(val => {
			const $buttonInner = `
				<div class="hup-img hup-bg-img hup-bg-img--${val.category}"></div>
				<div class="hup-tit">${ getLangString(val.name) }</div>
			`;

			const $button = document.createElement('button');
			$button.classList.add('hup-item');
			$button.setAttribute('data-category', val.category);
			$button.addEventListener('click', () => setSection(val.category));
			
			$button.insertAdjacentHTML('beforeend', $buttonInner);

			$itemsStart.append($button);

			// create inner sections
			const $sectionMarkup = `
				<div class="hup-section hup-section--inner hup-section--${val.category}">
					<div class="hup-top-img hup-bg-img hup-bg-img--${val.category}"></div>
					<div class="hup-title">${ getLangString(val.title) }</div>
					<div class="hup-items">
						
					</div>
				</div>
			`;
			
			const $section = new DOMParser().parseFromString($sectionMarkup, "text/html").firstChild.childNodes[1].childNodes[0];
			const $itemsInner = $section.querySelector('.hup-items');
			let $sites = '';

			val.sites.forEach(site => {
				$sites += `
					<a class="hup-item" href="${ getLangString(site.link) + utm }" target="_blank">
						<div class="hup-tit">${ getLangString(site.title) }</div>
						<div class="hup-p">${ getLangString(site.description) }</div>
						<div class="hup-currency">${ getLangString(site.currency) }</div>
					</a>
				`;
			});

			$itemsInner.insertAdjacentHTML('beforeend', $sites);

			$content.append($section);
		});


		// create button
		const $button = createEl('hup-button', 'button');
		$button.classList.add(`hup-${place}`);
		$button.addEventListener('click', togglePopup); // add event
		$body.append($button); // button to body

		// add events
		$wrapper.addEventListener('click', function(e){
			if (e.target.className != 'hup-wrapper') return;

			togglePopup();
			setTimeout(() => setSection('start'), 500);
		});

		$back.addEventListener('click', () => setSection('start'));

		// toggle popup
		function togglePopup() {
			$popup.classList.toggle('active');
		}

		// create element
		function createEl(clas, tag = 'div'){
			const $el = document.createElement(tag);
			$el.classList.add(clas);
			return $el;
		}

		// query selector class
		function $(el) {
			return document.querySelector(el);
		}

		// go inner category
		function setSection(category) {
			const $sections = document.querySelectorAll('.hup-section');
			const $currentSection = document.querySelector(`.hup-section--${category}`);

			$sections.forEach($section => $section.classList.remove('active'));
			$currentSection.classList.add('active');

			if (category == 'start') {
				$back.classList.remove('active');
			} else {
				$back.classList.add('active');
			}
		}


		vh100();
		window.addEventListener('resize', vh100);

		function vh100(){
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--hup-vh', `${vh}px`);
		}

		function getScrollbarWidth() {
			return window.innerWidth - document.documentElement.clientWidth;
		}


		// string or obj
		function getLangString(data) {
			return typeof(data) == 'string' ? data : data[lang]
		}
	}

})(window);