import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Language, getTranslation } from '../utils/translations';
import { getImageUrl, getProjectDemoUrl, IMAGE_PATHS } from '../utils/assets';

interface PortfolioProps {
  language: Language;
}

export function Portfolio({ language }: PortfolioProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const projects = [
    {
      id: 'spade',
      title: t('spade'),
      description: t('spadeDesc'),
      technologies: ['Segmentation', 'Diffusion', 'CLIP', 'SAM', 'DINO'],
      category: t('neuralNetworks'),
      // github: '#',
      demo: getProjectDemoUrl('spade'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'spade.jpg'),
    },
    {
      id: 'meanShifter',
      title: t('meanShifter'),
      description: t('meanShifterDesc'),
      technologies: ['Segmentation', 'Mean Shift', 'Transformers'],
      category: t('neuralNetworks'),
      // github: '',
      demo: getProjectDemoUrl('meanshifter'),
      // demo: 'https://johnnykaz.github.io/assets/pdf/MeanShifter.pdf',
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'meanshifter.jpg'),
    },
    {
      id: 'card-scanner',
      title: t('cardScanner'),
      description: t('cardScannerDesc'),
      technologies: ['Python', 'OpenCV', 'Hash', 'SWU'],
      category: t('computerVisionCat'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'card-scanner.jpg'),
    },
    {
      id: 'image-blending',
      title: t('imageBlending'),
      description: t('imageBlendingDesc'),
      technologies: ['Python', 'Laplacian Pyramid', 'Poisson Blending'],
      category: t('computerVisionCat'),
      github: 'https://github.com/JohnnyKaz/ComputerVision/tree/main/Image-Bleding',
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'image-blending.jpg'),
    },
    {
      id: 'ellipse-tracking',
      title: t('ellipseTracking'),
      description: t('ellipseTrackingDesc'),
      technologies: ['Python', 'Particle Swarm Optimization'],
      category: t('computerVisionCat'),
      github: 'https://github.com/JohnnyKaz/ComputerVision/tree/main/Circle-Ellipse-Tracking-PSO',
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'ellipse-tracking.gif'),
    },
    {
      id: 'digit-recognition',
      title: t('digitRecognition'),
      description: t('digitRecognitionDesc'),
      technologies: ['Python', 'Hough Transform', 'OpenCV'],
      category: t('computerVisionCat'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'digit-recognition.jpg'),
    },
    {
      id: 'csd-schedule',
      title: t('csdSchedule'),
      description: t('csdScheduleDesc'),
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: t('softDevelopment'),
      github: 'https://github.com/JohnnyKaz/schedule_csd',
      demo: 'https://johnnykaz.github.io/schedule_csd/',
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'csd-schedule.jpg'),
    },
    {
      id: 'coughsultant',
      title: t('coughsultant'),
      description: t('coughsultantDesc'),
      technologies: ['Python', 'openSMILE', 'scikit-learn'],
      category: t('machineLearning'),
      github: 'https://github.com/JohnnyKaz/CoughSultant',
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'coughsultant.jpg'),
    },
    {
      id: 'yago',
      title: t('yago'),
      description: t('yagoDesc'),
      technologies: ['Python', 'OWL', 'Tableau', 'Flask'],
      category: t('softDevelopment'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'yago.jpg'),
    },
    {
      id: 'akari-solver',
      title: t('akariSolver'),
      description: t('akariSolverDesc'),
      technologies: ['ASP', 'Clingo', 'Logic Programming'],
      category: t('softDevelopment'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'akari-solver.jpg'),
    },
    {
      id: 'speaker-identification',
      title: t('speakerIdentification'),
      description: t('speakerIdentificationDesc'),
      technologies: ['MATLAB', 'MFCC', 'GMM'],
      category: t('signalProcessing'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'speaker-identification.jpg'),
    },
    {
      id: 'speech-enhancement',
      title: t('speechEnhancement'),
      description: t('speechEnhancementDesc'),
      technologies: ['MATLAB', 'Wiener Filter', 'Spectral Subtract'],
      category: t('signalProcessing'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'speech-enhancement.jpg'),
    },
    {
      id: 'vus-detector',
      title: t('vusDetector'),
      description: t('vusDetectorDesc'),
      technologies: ['MATLAB', 'Energy', 'Zero-Crossings'],
      category: t('signalProcessing'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'vus-detector.jpg'),
    },
    {
      id: 'pacman-ai',
      title: t('pacmanAI'),
      description: t('pacmanAIDesc'),
      technologies: ['Python', 'BFS', 'DFS', 'A* Search'],
      category: t('machineLearning'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'pacman-ai.jpg'),
    },
    {
      id: 'spanakaz',
      title: t('spanakaz'),
      description: t('spanakazDesc'),
      technologies: ['C', 'Lex', 'Yacc'],
      category: t('softDevelopment'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'spanakaz.jpg'),
    },
    {
      id: 'micro-tcp',
      title: t('microTCP'),
      description: t('microTCPDesc'),
      technologies: ['C', 'Networking', 'Sockets', 'Protocols'],
      category: t('softDevelopment'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'microTCP.jpg'),
    },
    {
      id: 'sudoku-solver',
      title: t('sudokuSolver'),
      description: t('sudokuSolverDesc'),
      technologies: ['C', 'Backtracking', 'Data Structures', 'Algorithms'],
      category: t('softDevelopment'),
      // github: '#',
      // demo: '#',
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'sudoku-solver.jpg'),
    },
    {
      id: 'sorry-board-game',
      title: t('sorryBoardGame'),
      description: t('sorryBoardGameDesc'),
      technologies: ['Java', 'OOP', 'Model-View-Controller', 'GUI'],
      category: t('softDevelopment'),
      image: getImageUrl(IMAGE_PATHS.PROJECTS + 'sorry-game.jpg'),
    },
    
  ];

  return (
    <div className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <h2 className="text-primary">{t('portfolio')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className="p-0 bg-secondary/30 border-border hover:border-primary transition-all h-full flex flex-col group overflow-hidden">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-2 lg:mb-3">
                    <Badge variant="secondary" className="bg-secondary text-foreground">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <h4 className="mb-2 lg:mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground mb-3 lg:mb-4 flex-grow text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
