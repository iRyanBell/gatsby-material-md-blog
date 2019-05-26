import React from 'react'
import { Link } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { rhythm } from '../utils/typography'
import Box from '@material-ui/core/Box'

const footers = [
  {
    title: 'Socialize',
    links: [
        {
            title: 'Twitter',
            url: 'https://twitter.com/iryanbell'
        },
        {
            title: 'Facebook',
            url: 'https://facebook.com/iryanbell'
        },
        {
            title: 'Instagram',
            url: 'https://instagram.com/iryanbell'
        },
        {
            title: 'YouTube',
            url: 'https://youtube.com/channel/UC90uEBEeR9EnUOnkBgX1j0w'
        },
        {
            title: 'LinkedIn',
            url: 'https://linkedin.com/in/iryanbell'
        },
        {
            title: 'SnapChat',
            url: 'https://snapchat.com/add/iryanbell'
        },
        {
            title: 'GitHub',
            url: 'https://github.com/iryanbell'
        },
        {
            title: 'Medium',
            url: 'https://medium.com/@iryanbell'
        }
    ],
  },
  {
    title: 'Collaborate',
    links: [
        {
            title: 'VIM Social Media',
            url: 'https://vimsocialmedia.com'
        }
    ],
  },
  {
    title: 'Resources',
    links: [
        {
            title: 'Coming soon!',
            url: '#'
        }
    ],
  },
]

const Footer = () => (
  <footer
    style={{
      overflow: 'hidden',
      padding: `${rhythm(4 / 3)} 0`,
      borderTop: '1px solid rgba(0, 0, 2, 0.125)',
      fontFamily: 'Meriweather'
    }}
  >
    <Box justifyContent="center">
      <Box style={{ maxWidth: rhythm(36), padding: `0 ${rhythm(3 / 4)}`, margin: '0 auto' }}>
        <Grid spacing={10} container justify="space-evenly">
            {footers.map(footer => (
                <Grid item xs key={footer.title}>
                    <Typography variant="h6" color="textPrimary" style={{ fontStyle: 'normal' }} gutterBottom>
                        {footer.title}
                    </Typography>
                {footer.links.map(item => {
                    const isExternalLink = new RegExp(/^(http|https):\/\//i).test(item.url)

                    return isExternalLink
                        ? (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener"
                                style={{ color: '#555557', boxShadow: 'none', display: 'block' }}
                            >
                                {item.title}
                            </a>
                        )
                        : (
                            <Link to={item.url} key={item.title} style={{ color: '#555557', boxShadow: 'none' }}>
                                {item.title}
                            </Link>
                        )
                })}
                </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  </footer>
)

export default Footer
