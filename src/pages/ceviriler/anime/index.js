import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga';

import Loading from '../../../components/progress/index'

import { useGlobal } from 'reactn'
import { useTheme } from '@material-ui/styles'

import axios from '../../../config/axios/axios'

import AnimeIndexDesktop from './desktop'

import { episodeParser } from '../../../components/ceviriler/components'
import DownloadLink from '../../../components/ceviriler/anime/download-links'
import { animePage } from '../../../config/front-routes'
import { getAnimeIndex } from '../../../config/api-routes'
import AnimeIndexMobile from './mobile';



export default function AnimePage(props) {
    const theme = useTheme()

    const [anime, setAnime] = useState({})
    const [loading, setLoading] = useState(true)
    const [mobile] = useGlobal('mobile')

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                getAnimeIndex(props.match.params.slug),
            )

            res.data.translators = res.data.translators.split(',')
            res.data.encoders = res.data.encoders.split(',')
            res.data.genres = res.data.genres.split(',')
            res.data.studios = res.data.studios.split(',')

            setAnime(res.data)
            setLoading(false)
        }

        fetchData()
        ReactGA.pageview(window.location.pathname)
    }, [props.match.params.slug])

    if (!loading) {
        const downloadLinks = anime.episodes.map(data =>
            data.seen_download_page ?
                <DownloadLink
                    key={data.id}
                    title={episodeParser(data.episode_number, data.special_type)}
                    animeslug={anime.slug}
                    episodeid={data.id}
                    hoverbg={theme.palette.background.paper}
                    transition={theme.transitions.create('background', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.short,
                    })} />
                : null
        )

        const title = `PuzzleSubs ${anime.name} Türkçe ${anime.episodes.length !== 0 ? "İzle ve İndir" : ""}`

        if (!mobile) {
            return (
                <>
                    <Helmet>
                        <title>{title}</title>
                        <meta name="title" content={title} />
                        <meta name="description" content={`${anime.name} Türkçe İzle & İndir - ${anime.synopsis.substring(0, 80)}`} />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content={process.env.REACT_APP_SITENAME + animePage(anime.slug)} />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={`${anime.name} Türkçe İzle & İndir - ${anime.synopsis.substring(0, 80)}`} />
                        <meta property="og:image" content={anime.cover_art} />
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:url" content={process.env.REACT_APP_SITENAME + animePage(anime.slug)} />
                        <meta property="twitter:title" content={title} />
                        <meta property="twitter:description" content={`${anime.name} Türkçe İzle & İndir - ${anime.synopsis.substring(0, 80)}`} />
                        <meta property="twitter:image" content={anime.cover_art} />
                    </Helmet>
                    <AnimeIndexDesktop anime={anime} theme={theme} downloadLinks={downloadLinks} />
                </>
            )
        }
        else {
            return (
                <>
                    <Helmet>
                        <title>{title}</title>
                        <meta name="title" content={title} />
                        <meta name="description" content={`${anime.name} Türkçe İzle & İndir - ${anime.synopsis.substring(0, 80)}`} />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content={process.env.REACT_APP_SITENAME + animePage(anime.slug)} />
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={`${anime.name} Türkçe İzle & İndir - ${anime.synopsis.substring(0, 80)}`} />
                        <meta property="og:image" content={anime.cover_art} />
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:url" content={process.env.REACT_APP_SITENAME + animePage(anime.slug)} />
                        <meta property="twitter:title" content={title} />
                        <meta property="twitter:description" content={`${anime.name} Türkçe İzle & İndir - ${anime.synopsis.substring(0, 80)}`} />
                        <meta property="twitter:image" content={anime.cover_art} />
                    </Helmet>
                    <AnimeIndexMobile anime={anime} theme={theme} downloadLinks={downloadLinks} />
                </>
            )
        }
    }
    else return (
        <Loading />
    )
} 