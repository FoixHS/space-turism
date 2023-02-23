import { useTranslation } from 'react-i18next'

export const headers = () => {
  const { t } = useTranslation()
  return [
    {
      id: '00',
      path: '/',
      title: t('header.home')
    },
    {
      id: '01',
      path: '/destination',
      title: t('header.destination')
    },
    {
      id: '02',
      path: '/crew',
      title: t('header.crew')
    },
    {
      id: '03',
      path: '/technology',
      title: t('header.technology')
    }
  ]
}

export const staticDestinations = () => {
  const { t } = useTranslation()
  return [
    {
      id: 0,
      label: t('destination.options.moon.label'),
      imageUrl: '/images/destination/moon.png',
      description: t('destination.options.moon.description'),
      distance: '384,400 KM',
      timeDuration: t('destination.options.moon.time')
    },
    {
      id: 1,
      label: t('destination.options.mars.label'),
      imageUrl: '/images/destination/mars.png',
      description: t('destination.options.mars.description'),
      distance: '225 MIL. KM',
      timeDuration: t('destination.options.mars.time')
    },
    {
      id: 2,
      label: t('destination.options.europa.label'),
      imageUrl: '/images/destination/europa.png',
      description: t('destination.options.europa.description'),
      distance: '628 MIL. KM',
      timeDuration: t('destination.options.europa.time')
    },
    {
      id: 3,
      label: t('destination.options.titan.label'),
      imageUrl:
      '/images/destination/titan.png',
      description: t('destination.options.titan.description'),
      distance: '1.6 BIL. KM',
      timeDuration: t('destination.options.titan.time')
    }
  ]
}

export const staticCrew = () => {
  const { t } = useTranslation()
  return [
    {
      id: 0,
      name: 'DOUGLAS HURLEY',
      imageUrl: '/images/crew/douglas-hurley.png',
      description: t('crew.douglas.description'),
      rol: t('crew.douglas.rol')
    },
    {
      id: 1,
      name: 'MARK SHUTTLEWORTH',
      imageUrl: '/images/crew/mark-shuttleworth.png',
      description: t('crew.mark.description'),
      rol: t('crew.mark.rol')
    },
    {
      id: 2,
      name: 'Victor Glover',
      imageUrl: '/images/crew/victor-glover.png',
      description: t('crew.victor.description'),
      rol: t('crew.victor.rol')
    },
    {
      id: 3,
      name: 'Anousheh Ansari',
      imageUrl: '/images/crew/anousheh-ansari.png',
      description: t('crew.anousheh.description'),
      rol: t('crew.anousheh.rol')
    }
  ]
}

export const staticTechnologies = () => {
  const { t } = useTranslation()
  return [
    {
      id: 0,
      name: t('technology.vehicle.name'),
      description: t('technology.vehicle.description'),
      imageUrl: '/images/technology/launch-vehicle.jpg',
      desktopImageUrl: '/images/technology/desktop-launch-vehicle.jpg'
    },
    {
      id: 1,
      name: t('technology.spaceport.name'),
      description: t('technology.spaceport.description'),
      imageUrl: '/images/technology/spaceport.jpg',
      desktopImageUrl: '/images/technology/desktop-spaceport.jpg'
    },
    {
      id: 2,
      name: t('technology.capsule.name'),
      description: t('technology.capsule.description'),
      imageUrl: '/images/technology/space-capsule.jpg',
      desktopImageUrl: '/images/technology/desktop-space-capsule.jpg'
    }
  ]
}
