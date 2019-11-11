import Video from '../classes/video';

export default () => {
	const VIDEO_CLASSNAME = 'js-video';
	const $video = $(`.${VIDEO_CLASSNAME}`);

	if ($video.length === 0) return;

	$video.each((index, video) => {
		new Video(video).init();
	});
};
