import { timeline } from './mock/timelineMock';

/* eslint-disable no-undef */
function init() {
	(function ($) {
		console.log('yo');
		$(function () {
			console.log('yo2');

			document.querySelector('.container').addEventListener('scroll', function () {
				console.log('yo3');
				fnOnScroll();
			});

			document.querySelector('.container').addEventListener('resize', function () {
				fnOnResize();
			});

			var agTimeline = $('.js-timeline'),
				agTimelineLine = $('.js-timeline_line'),
				agTimelineLineProgress = $('.js-timeline_line-progress'),
				agTimelinePoint = $('.js-timeline-card_point-box'),
				agTimelineItem = $('.js-timeline_item'),
				agOuterHeight = $(window).outerHeight(),
				agHeight = $(window).height(),
				f = -1,
				agFlag = false;
			let agPosY, n, a, i;
			console.log('outer', agOuterHeight);
			function fnOnScroll() {
				agPosY = $(window).scrollTop();
				console.log('here');
				fnUpdateFrame();
			}

			function fnOnResize() {
				agPosY = $(window).scrollTop();
				agHeight = $(window).height();

				fnUpdateFrame();
			}

			function fnUpdateWindow() {
				console.log('here3');
				agFlag = false;
				console.log(agTimeline);

				agTimelineLine.css({
					top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
					bottom:
						agTimeline.offset().top +
						agTimeline.outerHeight() -
						agTimelineItem.last().find(agTimelinePoint).offset().top,
				});

				// eslint-disable-next-line no-unused-expressions
				fnUpdateProgress();
			}

			function fnUpdateProgress() {
				console.log('here4');
				var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

				i = agTop + agPosY - $(window).scrollTop();
				a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
				n = agPosY - a + agOuterHeight / 2;
				i <= agPosY + agOuterHeight / 2 && (n = i - a);
				agTimelineLineProgress.css({ height: n + 'px' });

				agTimelineItem.each(function () {
					var agTop = $(this).find(agTimelinePoint).offset().top;

					agTop + agPosY - $(window).scrollTop() < agPosY + 0.5 * agOuterHeight
						? $(this).addClass('js-ag-active')
						: $(this).removeClass('js-ag-active');
				});
			}

			function fnUpdateFrame() {
				console.log('here2');
				requestAnimationFrame(fnUpdateWindow);
				agFlag = true;
			}
			document.querySelector('.container').scrollBy(0, 20);
		});
	})(jQuery);
}
const timelineVue = (props) => {
	return (
		<div class='ag-timeline-block'>
			<section class='ag-section'>
				<div class='ag-format-container'>
					<div class='js-timeline ag-timeline'>
						<div class='js-timeline_line ag-timeline_line'>
							<div class='js-timeline_line-progress ag-timeline_line-progress'></div>
						</div>
						<div class='ag-timeline_list'>
							{timeline.map((v) => (
								<div class='js-timeline_item ag-timeline_item'>
									<div class='ag-timeline-card_box'>
										<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
											<div class='ag-timeline-card_point'>{v.date}</div>
										</div>
									</div>
									<div class='ag-timeline-card_item'>
										<div class='ag-timeline-card_inner'>
											<div class='ag-timeline-card_info'>
												<div class='ag-timeline-card_title'>{v.title}</div>
												<div class='ag-timeline-card_desc'>{v.desc}</div>
											</div>
										</div>
									</div>
								</div>
							))}

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-1380</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation du Saint Royaume de Lorus</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-1300</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Bataille de 100jours</div>
											<div class='ag-timeline-card_desc'>
												Mise au Panthéon du Drakéides Heiloong devenant le dieu du courage.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-1180</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Naissance du premier demi-orc</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-1100</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition du premier Elfes</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-1020</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition du premier demi-elfe</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-1000</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation du Royaume de Trésabia</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-920</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation de Chonoît</div>
											<div class='ag-timeline-card_desc'>
												Qui donnera l'apparition des Elfes Noirs quelque années seulement après.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-980</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition des premiers nains</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-900</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition des premiers Gnomes</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-800</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>
												Sacre d'Eikichi Nobunaga, le dragon Immortel, 1er Grand Elfes de la Dynastie Owrilia
											</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-700</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>La Migration Owrilien</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-680</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Meurtre de Nein</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-600</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Création des premier vampires par Archombres</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-535</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Cataclysme de Magters</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-508</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparitoin de demi-élémentaire</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-502</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition de Sombre Cornes</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-498</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Création d'Homme-Rat par les gnomes</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-450</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Première invasion des hommes bêtes</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-420</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Création de la deuxieme grande famille Vampires</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-320</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition des hommes singes</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-280</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition des femmes dragons de Tangto</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>-275</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition des Lamia</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>1</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Couronnement de l'empereur Thorius Gladimus</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>55</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Mort de l'empereur</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>180</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation du Royaume d'Uriel</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>300</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation du Myrrdin</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>340</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition des peaux vertes</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>360</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation de Barkovie</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>400</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation d'Azgul</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>471</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Création de la garde royal d'Uriel, "Les lions Blancs"</div>
											<div class='ag-timeline-card_desc'>
												Après qu'un juen hommes sauve le Roi et son armée d'un terrible Lions blanc. Le Roi Faucon
												décida de creer une nouvelle armée royal plus informel, les "lions blanc" avec à sa tête ce
												jeune homme.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>500</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Apparition des Nain de Pierre</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>511</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation de l'alliance de Gloucester</div>
											<div class='ag-timeline-card_desc'>
												Nulle ne sais vraiment l'origine de cette allaince entre Roi marchant et leur armée. Certains
												pense que c'est du a la menace grandissante du ***** tandis que d'autre pense a l'apparition des
												Nains de Pierre qui les aurait fait prendre peur.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>630</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Premier village Skurf</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>780</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation du Royaume de Bretagne</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>800</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>
												Apparition d'horde du Néant dans le Nord du nouveau monde
											</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>900</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fondation de la troisieme famille</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>1000</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Entré au panthéon d'Hrothgar</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>1110</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Début des grandes Fuites des Skurf</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class='js-timeline_item ag-timeline_item'>
								<div class='ag-timeline-card_box'>
									<div class='js-timeline-card_point-box ag-timeline-card_point-box'>
										<div class='ag-timeline-card_point'>1200</div>
									</div>
								</div>
								<div class='ag-timeline-card_item'>
									<div class='ag-timeline-card_inner'>
										<div class='ag-timeline-card_info'>
											<div class='ag-timeline-card_title'>Fin des grandes Fuites des Skurf</div>
											<div class='ag-timeline-card_desc'>
												Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget
												dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
												sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
												id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
												faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
												fringilla mauris sit amet nibh.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{init()}
		</div>
	);
};
export default timelineVue;