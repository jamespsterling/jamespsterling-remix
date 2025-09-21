export default function IotEventsApp() {
	// https://tailwind-elements.com/docs/standard/designblocks/content
	return (
		<article className="max-w-1xl px-6 py-6 mx-auto space-y-16 dark:text-gray-50">
			<div className="md:container my-2 mx-auto md:px-6">
				<section className="mb-8 md:mb-32">
					<div className="mx-auto mb-12 px-0 py-2 lg:px-32 lg:pt-24">
						<div className="-m-1 flex flex-wrap md:-m-2">
							<div className="flex w-1/2 flex-wrap">
								<div className="w-full p-1 md:p-2">
									<picture>
										<source srcSet="/img/projects/iot-events-app/splash.avif" type="image/avif" />
										<source srcSet="/img/projects/iot-events-app/splash.webp" type="image/webp" />
										<img
											src="/img/projects/iot-events-app/splash.jpg"
											alt="gallery"
											className="block h-full w-full rounded-lg object-cover object-center"
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="w-1/2 p-1 md:p-2">
									<picture>
										<source
											srcSet="/img/projects/iot-events-app/event-speakers-sm.avif"
											type="image/avif"
										/>
										<source
											srcSet="/img/projects/iot-events-app/event-speakers-sm.webp"
											type="image/webp"
										/>
										<img
											src="/img/projects/iot-events-app/event-speakers-sm.jpg"
											alt="gallery"
											className="block h-full w-full rounded-lg object-cover object-center"
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="w-1/2 p-1 md:p-2">
									<picture>
										<source
											srcSet="/img/projects/iot-events-app/notifications-sm.avif"
											type="image/avif"
										/>
										<source
											srcSet="/img/projects/iot-events-app/notifications-sm.webp"
											type="image/webp"
										/>
										<img
											src="/img/projects/iot-events-app/notifications-sm.png"
											alt="gallery"
											className="block h-full w-full rounded-lg object-cover object-center"
											loading="lazy"
										/>
									</picture>
								</div>
							</div>
							<div className="flex w-1/2 flex-wrap">
								<div className="w-1/2 p-1 md:p-2">
									<picture>
										<source srcSet="/img/projects/iot-events-app/event-sm.avif" type="image/avif" />
										<source srcSet="/img/projects/iot-events-app/event-sm.webp" type="image/webp" />
										<img
											src="/img/projects/iot-events-app/event-sm.png"
											alt="gallery"
											className="block h-full w-full rounded-lg object-cover object-center"
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="w-1/2 p-1 md:p-2">
									<picture>
										<source
											srcSet="/img/projects/iot-events-app/event-venue-sm.avif"
											type="image/avif"
										/>
										<source
											srcSet="/img/projects/iot-events-app/event-venue-sm.webp"
											type="image/webp"
										/>
										<img
											src="/img/projects/iot-events-app/event-venue-sm.png"
											alt="gallery"
											className="block h-full w-full rounded-lg object-cover object-center"
											loading="lazy"
										/>
									</picture>
								</div>
								<div className="w-full p-1 md:p-2">
									<picture>
										<source srcSet="/img/projects/iot-events-app/events.avif" type="image/avif" />
										<source srcSet="/img/projects/iot-events-app/events.webp" type="image/webp" />
										<img
											src="/img/projects/iot-events-app/events.png"
											alt="gallery"
											className="block h-full w-full rounded-lg object-cover object-center"
											loading="lazy"
										/>
									</picture>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</article>
	);
}
