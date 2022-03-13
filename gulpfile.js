const fs            = require('fs')
const gulp          = require('gulp')
const sass          = require('gulp-sass')
const browserSync   = require('browser-sync')
const autoprefixer  = require('gulp-autoprefixer')
const notify        = require('gulp-notify')
const concat        = require('gulp-concat')
const pug           = require('gulp-pug')
const uglify        = require('gulp-uglify-es').default
const cleanCSS      = require('gulp-clean-css')
const realFavicon   = require('gulp-real-favicon')
const gulpif        = require('gulp-if')
const qrcode        = require('qrcode-terminal')
const rename        = require('gulp-rename')
const styleToJs     = require('gulp-style-to-js')

// Sass
gulp.task('styles', function() {
	return gulp.src(`app/_dev/sass/**/*.sass`)
		.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
		.pipe(rename({ suffix: '.min', prefix : '' }))
		.pipe(autoprefixer(['last 2 versions']))
		.pipe( cleanCSS({level: { 1: { specialComments: 0 } } }) )
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
})

// Js
gulp.task('scripts', function() {
	return gulp.src([
		`app/_dev/js/script.js` // Всегда в конце
		])
		.pipe(concat('script.min.js'))
		.pipe( uglify({output: {comments: /^!/}}) ) // Минификатор
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.stream())
})

// Pug
gulp.task('pug', function() {
	return gulp.src(`app/_dev/pug/*.pug`)
		.pipe(pug({
			pretty: '\t'
		}))
		.pipe(gulp.dest('app'))
		.pipe(browserSync.stream())
})

// Browser-Sync
gulp.task('browser-sync', function() {
	browserSync({
		callbacks: {
			ready: function(err, bs){
				// QR code terminal: external link
				// const qrExternalLink = bs.options.get('urls').get('external')

				// qrcode.generate(qrExternalLink, {small: true})
			}
		},
		server: {
			baseDir: 'app'
		},
		notify: false,
		port: '5566',
		host: '192.168.1.121', // Сменить адрес, если сервер не работает на мобильном 
		// online: true, // Если нет интернета
		// tunnel: true, tunnel: "developerrokkido" // Демонстрация заказчику: http://developerrokkido.localtunnel.me
	})
})



// Favicon generator
gulp.task('favicon', function(done) {
	const faviconDataPath = `app/img/favicon/faviconData.json`

	if ( !fs.existsSync(faviconDataPath) ) { // если фавиконки не созданы - создать

		let faviconImgPath = `app/img/favicon/favicon.svg`

		if (!fs.existsSync(faviconImgPath)) {
			faviconImgPath = `app/img/favicon/favicon.png`
		}

		realFavicon.generateFavicon({
			masterPicture: faviconImgPath,
			dest: `app/img/favicon`,
			iconsPath: '/',
			design: {
				ios: {
					pictureAspect: 'noChange',
					assets: {
						ios6AndPriorIcons: false,
						ios7AndLaterIcons: false,
						precomposedIcons: false,
						declareOnlyDefaultIcon: true
					}
				},
				desktopBrowser: {
					design: 'raw'
				},
				windows: {
					pictureAspect: 'noChange',
					backgroundColor: '#666f86',
					onConflict: 'override',
					assets: {
						windows80Ie10Tile: false,
						windows10Ie11EdgeTiles: {
							small: false,
							medium: true,
							big: false,
							rectangle: false
						}
					}
				},
				androidChrome: {
					pictureAspect: 'noChange',
					themeColor: '#ffffff',
					manifest: {
						name: 'Sitename',
						display: 'standalone',
						orientation: 'notSet',
						onConflict: 'override',
						declared: true
					},
					assets: {
						legacyIcon: false,
						lowResolutionIcons: false
					}
				},
				safariPinnedTab: {
					pictureAspect: 'blackAndWhite',
					threshold: 75,
					themeColor: '#666f86'
				}
			},
			settings: {
				scalingAlgorithm: 'Mitchell',
				errorOnImageTooSmall: false,
				readmeFile: false,
				htmlCodeFile: false,
				usePathAsIs: false
			},
			markupFile: faviconDataPath
		}, function() {
			done()
		})
	}
})

// Css to js
gulp.task('cssToJs', function(){
	return gulp.src('app/css/style.min.css')
		.pipe( styleToJs() )
		.pipe(concat('hup-style.js'))
		.pipe(gulp.dest('app/js'))
})

// Build
gulp.task('build', function(){
	return gulp.src(['app/js/script.min.js', 'app/js/hup-style.js'])
		.pipe(concat('hup.min.js'))
		.pipe(gulp.dest('dist'))
})

// Watch
gulp.task('watch', function(){
	gulp.watch(`app/_dev/sass/**/*.sass`, gulp.parallel('styles'))
	gulp.watch(`app/_dev/sass/**/*.sass`, gulp.parallel('cssToJs'))
	gulp.watch(`app/_dev/js/**/*.js`, gulp.parallel('scripts'))
	gulp.watch(`app/_dev/pug/**/*.pug`, gulp.parallel('pug'))
})


// gulp default
gulp.task('default', gulp.parallel('styles', 'cssToJs', 'scripts', 'pug', 'browser-sync', 'watch', 'favicon'))