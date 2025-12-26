import { motion } from 'motion/react';
import { Code, BookOpen, Sparkles, Origami } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Language, getTranslation } from '../utils/translations';

interface AboutMeProps {
  language: Language;
}

export function AboutMe({ language }: AboutMeProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const interests = t('aboutMeInterests')
    .split(',')
    .map(interest => interest.trim())
    .filter(interest => interest.length > 0);

  const activities = [
    {
      icon: Code,
      title: t('softwareDevelopment'),
      description: t('softwareDevelopmentDesc'),
    },
    {
      icon: BookOpen,
      title: t('academicResearch'),
      description: t('academicResearchDesc'),
    },
    {
      icon: Sparkles,
      title: t('artificialIntelligence'),
      description: t('artificialIntelligenceDesc'),
    },
    {
      icon: Origami,
      title: t('papercrafts'),
      description: t('papercraftsDesc'),
    },
  ];

  return (
    <div className="flex-1 space-y-6 lg:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-primary">{t('aboutMe')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>

        <div className="space-y-4 text-muted-foreground">
          <p>{t('aboutMeText1')}</p>
          <div className="flex flex-wrap gap-2 pb-2 -mt-2">
            {interests.map((interest, index) => (
              <Badge key={index} variant="secondary" className="bg-secondary text-foreground text-base">
                {interest}
              </Badge>
            ))}
          </div>
          <p>{t('aboutMeText2')}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <h2 className="text-primary">{t('whatImDoing')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-4 lg:p-6 bg-secondary/30 border-border hover:border-primary/50 transition-all h-full">
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1 lg:mb-2">{activity.title}</h4>
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
