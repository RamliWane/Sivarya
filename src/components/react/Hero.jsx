import React from 'react';
import { Headphones, Play } from 'lucide-react';

function SpotifyIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function ApplePodcastsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.34 0A5.327 5.327 0 0 0 0 5.34v13.32A5.327 5.327 0 0 0 5.34 24h13.32A5.327 5.327 0 0 0 24 18.66V5.34A5.327 5.327 0 0 0 18.66 0zm7.83 4.56a5.41 5.41 0 0 1 5.4 5.4v.3a5.412 5.412 0 0 1-10.8 0v-.3a5.4 5.4 0 0 1 5.4-5.4zm-5.58 8.64a5.41 5.41 0 0 1 5.4 5.4v.9a1.5 1.5 0 0 1-3 0v-.9a2.4 2.4 0 0 0-4.8 0v4.8a1.5 1.5 0 0 1-3 0v-9.6a1.5 1.5 0 0 1 3 0v.9a5.4 5.4 0 0 1 5.4-5.4 5.4 5.4 0 0 1 5.4 5.4v4.8a1.5 1.5 0 0 1-3 0v-4.8a2.4 2.4 0 0 0-4.8 0v.9a1.5 1.5 0 0 1-3 0v-.9a5.4 5.4 0 0 1 5.4-5.4c.54 0 1.08.09 1.56.24a1.5 1.5 0 0 1 1.08 1.44v.3a1.5 1.5 0 0 1-3 0v-.3a5.4 5.4 0 0 1-5.4-5.4v-.3A5.387 5.387 0 0 1 12 4.56a5.387 5.387 0 0 1 5.34 4.56 1.5 1.5 0 0 1-3 .6 2.4 2.4 0 0 0-2.34-1.86 2.4 2.4 0 0 0-2.4 2.4v.3a5.4 5.4 0 0 1-4.44 5.34 1.5 1.5 0 0 1-.96-1.38v-.3c0-.54.24-1.08.66-1.44a1.5 1.5 0 0 1 2.1.18c.36.42.54.96.54 1.5v.3a2.4 2.4 0 0 0 4.8 0v-.9a5.387 5.387 0 0 1 5.34-4.56 5.387 5.387 0 0 1 5.34 4.56 1.5 1.5 0 0 1-3 .6 2.4 2.4 0 0 0-2.34-1.86 2.4 2.4 0 0 0-2.4 2.4v.9a5.41 5.41 0 0 1-10.8 0v-.9a5.4 5.4 0 0 1 5.4-5.4z" />
    </svg>
  );
}

function GooglePodcastsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 12 5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 12 0zM5.636 3.636a1.5 1.5 0 0 0-2.121 2.121l1.414 1.414a1.5 1.5 0 0 0 2.121-2.121L5.636 3.636zm12.728 0l-1.414 1.414a1.5 1.5 0 1 0 2.121 2.121l1.414-1.414a1.5 1.5 0 1 0-2.121-2.121zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM3.636 14.95l-1.414 1.414a1.5 1.5 0 0 0 2.121 2.121l1.414-1.414a1.5 1.5 0 0 0-2.121-2.121zm16.728 0a1.5 1.5 0 0 0-2.121 2.121l1.414 1.414a1.5 1.5 0 0 0 2.121-2.121l-1.414-1.414zM12 18a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 12 18z" />
    </svg>
  );
}

function SoundcloudIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.104.094.057 0 .09-.037.1-.094l.202-1.282-.202-1.332c-.01-.057-.043-.094-.1-.094zm1.83-1.229c-.063 0-.109.049-.116.109l-.217 2.546.217 2.455c.007.06.053.11.116.11.062 0 .108-.05.117-.11l.245-2.455-.245-2.546c-.009-.06-.055-.109-.117-.109zm.957-.481c-.071 0-.121.055-.127.122l-.201 3.027.201 2.891c.006.066.056.122.127.122.069 0 .12-.056.127-.122l.227-2.891-.227-3.027c-.007-.067-.058-.122-.127-.122zm.948-.475c-.078 0-.134.062-.14.135l-.183 3.502.183 2.754c.006.073.062.135.14.135.076 0 .133-.062.14-.135l.206-2.754-.206-3.502c-.007-.073-.064-.135-.14-.135zm.951-.383c-.085 0-.146.068-.152.149l-.167 3.885.167 2.624c.006.08.067.149.152.149.084 0 .145-.07.152-.149l.187-2.624-.187-3.885c-.007-.08-.068-.149-.152-.149zm.961-.326c-.093 0-.158.074-.164.163l-.15 4.211.15 2.503c.006.088.071.163.164.163.091 0 .157-.075.164-.163l.169-2.503-.169-4.211c-.007-.089-.073-.163-.164-.163zm.954-.264c-.1 0-.17.08-.176.177l-.135 4.475.135 2.389c.006.096.076.177.176.177.099 0 .17-.081.177-.177l.152-2.389-.152-4.475c-.007-.097-.078-.177-.177-.177zm2.022-.209c-.044 0-.088.006-.13.019a.172.172 0 0 0-.104.163l-.117 4.664.117 2.284c.001.099.046.178.104.163a.48.48 0 0 0 .13.019c.389 0 .704-.315.715-.704l.132-2.362-.132-4.664c-.011-.389-.326-.704-.715-.704zm.954-.142a.178.178 0 0 0-.172.126c-.024.079-.035.161-.035.245l-.101 4.767.101 2.184c.013.312.15.583.385.758.148.11.324.174.51.174.213 0 .411-.083.561-.234a.787.787 0 0 0 .225-.561l.115-2.123-.115-4.843a.81.81 0 0 0-.786-.707zm1.945-.331c-.033-.002-.066-.002-.1-.002-.489 0-.947.166-1.314.443a2.167 2.167 0 0 0-.612.766l-.084 4.728.084 2.096c.02.583.276 1.114.703 1.496.347.308.793.483 1.261.483h.165c.662-.033 1.198-.582 1.23-1.243l.098-2.03-.098-4.837c-.032-.661-.568-1.21-1.23-1.243v-.001zm1.007.175c-.011-.59-.252-1.12-.66-1.513a2.01 2.01 0 0 0-1.365-.528c-.133 0-.264.012-.392.035a1.893 1.893 0 0 0-1.294.815l-.066 5.019.066 2.002c.004.327.125.635.332.884.264.321.644.527 1.063.572h.033c.774-.036 1.399-.665 1.432-1.438l.077-2.004-.077-5.019c-.001-.115-.023-.227-.066-.331l.001.001-.003-.001-.002-.001zm2.973-1.24c-.083 0-.166.006-.247.018-.235.035-.442.159-.571.345a.957.957 0 0 0-.199.609l-.05 5.096.05 1.915c.008.406.134.79.354 1.116.228.337.564.58.95.695.126.037.256.056.386.056.625 0 1.157-.472 1.213-1.094l.061-1.94-.061-5.088c-.056-.622-.588-1.094-1.213-1.094h-.001-.002v-.001z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" id="home">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/portfolio_podcast.jpg"
          alt="Podcast recording session"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Hero Content — Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-56 min-h-screen">
        <div className="inline-flex items-center gap-2 mb-5">
          <Headphones className="w-4 h-4 text-white/70" />
          <span className="text-white/70 text-sm font-medium tracking-wide">
            What Do You Want to Hear Today?
          </span>
        </div>

        <h1 className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] tracking-tight max-w-4xl mb-6">
          Dive Into Our
          <br />
          Podverse
        </h1>

        <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
          Jelajahi berbagai episode podcast &amp; radio dari tim kami.
          Cerita, wawasan, dan inspirasi — semua ada di satu tempat.
        </p>

        <a
          href="#episodes"
          className="inline-flex items-center gap-2.5 bg-white text-navy font-semibold px-7 py-3.5 rounded-full transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-0.5"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Listen More</span>
        </a>
      </div>

      {/* Floating Platform Card */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-6 mb-0">
        <div className="bg-white rounded-t-3xl shadow-2xl shadow-black/20 px-6 py-6 sm:px-8 sm:py-7">
          <p className="text-center text-xs sm:text-sm font-semibold text-slate-400 tracking-wide uppercase mb-5">
            Listen &amp; Subscribe On
          </p>

          <div className="flex items-center justify-center gap-8 sm:gap-12">
            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
              aria-label="Spotify"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1DB954]/10 flex items-center justify-center group-hover:bg-[#1DB954]/20 transition-colors">
                <SpotifyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1DB954]" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Spotify
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
              aria-label="Apple Podcasts"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#9933CC]/10 flex items-center justify-center group-hover:bg-[#9933CC]/20 transition-colors">
                <ApplePodcastsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#9933CC]" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Apple Podcasts
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
              aria-label="Google Podcasts"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4285F4]/10 flex items-center justify-center group-hover:bg-[#4285F4]/20 transition-colors">
                <GooglePodcastsIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#4285F4]" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Google
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-2 group"
              aria-label="Soundcloud"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FF5500]/10 flex items-center justify-center group-hover:bg-[#FF5500]/20 transition-colors">
                <SoundcloudIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5500]" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                Soundcloud
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
