import Head from 'next/head'

const Meta = () => {
    return (
        <Head>
            {/* <!-- Primary Meta Tags --> */}
            <title>Garv Nanwani || Home</title>
            <meta name="title" content="Garv Nanwani || Home" />
            <meta
                name="description"
                content="Official Portfolio Website of Garv Nanwani, Second Year Undergraduate Student, highly
  enthusiastic about programming and creating things"
            />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:url" content="https://garvnanwani.netlify.app" />
            <meta property="og:title" content="Garv Nanwani || Home" />
            <meta
                property="og:description"
                content="Official Portfolio Website of Garv Nanwani, Second Year Undergraduate Student, highly
  enthusiastic about programming and creating things"
            />
            <meta property="og:image" content="/mypic.jpg" />
            <meta property="og:image:alt" content="garv nanwani" />
            <meta property="og:type" content="website" />

            {/* <!-- Twitter --> */}
            <meta
                property="twitter:url"
                content="https://garvnanwani.netlify.app"
            />
            <meta property="twitter:title" content="Garv Nanwani || Home" />
            <meta
                property="twitter:description"
                content="Official Portfolio Website of Garv Nanwani, Second Year Undergraduate Student, highly
    enthusiastic about programming and creating things"
            />
            <meta property="twitter:image" content="/mypic.jpg" />

            {/* <!-- css -->
            <!-- fonts --> */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Roboto&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
            />
            <link rel="shortcut icon" href="/GNlogo.png" type="icon" />
        </Head>
    )
}

export default Meta
