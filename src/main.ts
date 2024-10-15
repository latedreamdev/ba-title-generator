import './style.css';
import LogoCanvas from './canvas';
import loadSVGs from './utils/loadSVGs';
import './i18n';

(async() => {
	const matchScheme = matchMedia('(prefers-color-scheme: dark)');
	matchScheme.addEventListener('change', (e) => {
		document.documentElement.setAttribute('data-theme', e.matches? 'dark': 'light');
	});
	document.documentElement.setAttribute('data-theme', matchScheme.matches? 'dark': 'light');

	await loadSVGs();
	const logo = new LogoCanvas();
	logo.draw();
})();
