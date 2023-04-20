import { DropdownItems } from "@/models/dropdown";
import { LinkGroupType } from "@/models/links";

export const timeOptions = [
    'As soon as possible',
    'Within 1 week',
    'Within 2 weeks',
    'Within 30 days',
    'More than 30 days'
]

export const informationBarLinks: Array<{ label: string, items: DropdownItems }> = [
    {
        label: 'About Us',
        items: [
            {
                link: '/home',
                label: 'Why Us ',
            },
            {
                link: '/home',
                label: 'History',
            },
            {
                label: 'Terms And Conditions',
                link: '/home',
            },
            {
                label: 'Privacy Policy',
                link: '/home',
            }
        ]
    },
    {
        label: 'Who We Serve',
        items: [
            {
                label: 'Why Us',
                link: '/home',
            },
            {
                label: 'History',
                link: '/home',
            },
            {
                label: 'Terms And Conditions',
                link: '/home',
            },
            {
                label: 'Privacy Policy',
                link: '/home',
            }
        ]
    },
    {
        label: 'Useful Tips',
        items: [
            {
                label: 'Why Us',
                link: '/home',
            },
            {
                label: 'History',
                link: '/home',
            },
            {
                label: 'Terms And Conditions',
                link: '/home',
            },
            {
                label: 'Privacy Policy',
                link: '/home',
            }
        ]
    }
];

export const linksGroup: Array<LinkGroupType> = [
    {
        groupName: 'Contact Info',
        links: [
            {
                text: 'Head Office: 4350 N Hamilton Rd Columbus, OH 43230'
            },
            {
                text: 'Phone: ( 380 ) 867 - 0547'
            },
            {
                text: 'Email: info@columbusautotransport.com'
            }
        ]
    },
    {
        groupName: 'Quick Links',
        links: [
            {
                text: 'Quote',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'FAQs',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Contact Us',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Blog',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'News',
                link: 'https://dev.ifta.online/'
            },
        ]
    },
    {
        groupName: 'Useful Tips',
        links: [
            {
                text: 'Before You Ship',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Cheap Car Transport',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Brokers and Carriers',
                link: 'https://dev.ifta.online/'
            }
        ]
    },
    {
        groupName: 'Columbus Cities',
        links: [
            {
                text: 'Dayton, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Mansfield, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Springfield, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Lima, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Cincinnati, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Canton, OH',
                link: 'https://dev.ifta.online/'
            }
        ]
    },
    {
        links: [
            {
                text: 'Zanesville, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Findlay, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Dublin, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Westerville, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Gahanna, OH',
                link: 'https://dev.ifta.online/'
            },
            {
                text: 'Grove City, OH',
                link: 'https://dev.ifta.online/'
            }
        ] 
    },
];

export const contactInfo: LinkGroupType = {
    groupName: 'Contact Info',
    links: [
        {
            text: 'Phone: ( 380 ) 867 - 0547'
        },
        {
            text: 'Email: info@columbusautotransport.com'
        }
    ]
}