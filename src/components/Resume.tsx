import { motion } from 'motion/react';
import React from 'react';
import { GraduationCap, Briefcase, Award, Code, Languages, Gamepad2, CalendarDays, Download } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Language, getTranslation } from '../utils/translations';

interface ResumeProps {
  language: Language;
}

export function Resume({ language }: ResumeProps) {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const experience = [
    {
      title: t('siriSpeechIntern'),
      company: t('APPLE'),
      period: `03/2026 - ${t('present')}`,
      responsibilities: [
        t('responsibility2')
      ],
    },
    {
      title: t('gradResearchAssistant'),
      company: t('IACM_forth'),
      //   period: `2024 - ${t('present')}`,
      period: '11/2023 - 09/2025',
      responsibilities: [
        t('responsibility0'),
        t('responsibility1'),
      ],
    },
    {
      title: t('undergradIntern'),
      company: t('SPL_forth'),
      period: '10/2019 - 06/2022',
      responsibilities: [],
    },
  ];

  const education = [
    {
      degree: t('msCS'),
      institution: t('UoC_csd'),
      gpa: '9.64/10',
      year: '2022 - 2025',
      thesis: t('thesisMSc'),
      advisor: t('komod_advisor'),
    },
    {
      degree: t('bsCS'),
      institution: t('UoC_csd'),
      gpa: '9.18/10',
      year: '2018 - 2022',
      thesis: t('thesisBSc'),
      advisor: t('komod_advisor'),
    },
  ];

  const skills = {
    [t('skillLevelAdvanced')]: ['Python', 'MATLAB', 'C', 'LaTeX', 'Linux', 'Markdown'],
    [t('skillLevelIntermediate')]: ['PyTorch', 'Git/Github', 'C++', 'Java', 'HTML'],
    [t('skillLevelBasic')]: ['TensorFlow', 'Javascript', 'CSS', 'Prolog', 'ASP', 'SQL'],
  };

  const honorsAndAwards = [
    {
      title: t('hackathonAward'),
      period: t('hackathonYear'),
      institution: t('hackathonInstitution'),
      link: 'https://hackathon.csd.uoc.gr/pastevents',
    },
    {
      title: t('deprofitDistinction'),
      period: t('deprofitPeriod'),
      institution: t('deprofitInstitution'),
      link: 'https://www.csd.uoc.gr/CSD/index.jsp?content=diakrisi_deprofoit'
    },
    {
      title: t('steliosScholarship'),
      period: t('steliosYears'),
      institution: t('steliosInstitution'),
      link: 'https://www.ics.forth.gr/orphanoudakis_awards',
    },
  ];

  const activities = [
    {
      title: t('teachingAssistant'),
      courses: [
        { name: language === 'en' ? 'Image Processing' : 'Επεξεργασία Εικόνας', link: 'https://www.csd.uoc.gr/~hy371/' },
        { name: language === 'en' ? 'Neural Networks' : 'Νευρωνικά Δίκτυα', link: 'https://www.csd.uoc.gr/~hy587/' },
        { name: language === 'en' ? 'Probability' : 'Πιθανότητες', link: 'http://hy217-csd.datacenter.uoc.gr/' },
        { name: language === 'en' ? 'Linear Algebra' : 'Γραμμική Άλγεβρα', link: 'https://www.csd.uoc.gr/~hy119/' },
        { name: language === 'en' ? 'Computer Organization' : 'Οργάνωση Υπολογιστών', link: 'https://www.csd.uoc.gr/~hy225/' },
      ],
    },
    {
      title: language === 'en' 
        ? 'Organizing Committee Member at the "CSD Career Fair"'
        : 'Μέλος Οργανωτικής Επιτροπής στην "Ημερίδα Καριέρας CSD"',
      year: '2024',
      link: 'https://careerfair.csd.uoc.gr/',
    },
    {
      title: language === 'en'
        ? 'Attendance at the "HellasQCI Training Event Crete"'
        : 'Παρακολούθηση της "Εκπαιδευτικής Εκδήλωσης HellasQCI Κρήτης"',
      year: '2024',
      link: 'https://hellasqci.eu/day-2-qkd-pqc-for-cybersecurity/',
    },
    {
      title: language === 'en'
        ? 'Volunteer at the "FOSSCOMM" Pan-Hellenic Conference'
        : 'Εθελοντής στο Πανελλήνιο Συνέδριο "FOSSCOMM"',
      year: '2023',
      link: 'https://2023.fosscomm.gr/',
    },
    {
      title: language === 'en'
        ? 'Organizing Committee Member at the "CSD Career Fair"'
        : 'Μέλος Οργανωτικής Επιτροπής στην "Ημερίδα Καριέρας CSD"',
      year: '2023',
      link: 'https://careerfaircsd2023.com/',
    },
    {
      title: language === 'en'
        ? 'Volunteer at the International Conference "IEEE ICASSP"'
        : 'Εθελοντής στο Διεθνές Συνέδριο "IEEE ICASSP"',
      year: '2023',
      link: 'https://2023.ieeeicassp.org/',
    },
    {
      title: language === 'en'
        ? 'Participation in the International Summer School "IDENTITIES"'
        : 'Συμμετοχή στη Διεθνή Θερινή Σχολή "IDENTITIES"',
      year: '2022',
      link: 'https://identitiesproject.eu/',
    },
    {
      title: language === 'en'
        ? 'Participation in the International Program "Huawei Seeds For The Future"'
        : 'Συμμετοχή στο Διεθνές Πρόγραμμα "Huawei Seeds For The Future"',
      year: '2021',
      link: 'https://www.huawei.com/minisite/seeds-for-the-future/index.html',
    },
    {
      title: language === 'en'
        ? 'Attendance at "Speech Processing Courses in Crete" Summer School'
        : 'Παρακολούθηση της Θερινής Σχολής "Μαθήματα Επεξεργασίας Ομιλίας στην Κρήτη"',
      year: '2021',
      link: 'https://www.csd.uoc.gr/~spcc/SPCC2021/index.html',
    },
    {
      title: language === 'en'
        ? 'Participation in the International Online Summer School "IDENTITIES"'
        : 'Συμμετοχή στη Διεθνή Διαδικτυακή Θερινή Σχολή "IDENTITIES"',
      year: '2021',
      link: 'https://identitiesproject.eu/',
    },
    {
      title: language === 'en'
        ? 'Participation in the International Masterclass "Hands On Particle Physics"'
        : 'Συμμετοχή στο Διεθνές Masterclass "Hands On Particle Physics"',
      year: '2017',
      link: 'https://physicsmasterclasses.org/index.php?cat=archive&page=schedule_2017',
    },
    {
      title: language === 'en'
        ? 'Participation in the European Project "IRRESISTIBLE"'
        : 'Συμμετοχή στο Ευρωπαϊκό Πρόγραμμα "IRRESISTIBLE"',
      year: '2015',
      link: 'http://www.irresistible-project.eu/index.php/en/',
    },
  ];

  const spokenLanguages =
    language === 'en'
      ? ['Greek (native)', 'English (fluent - C1)', 'German (basic)']
      : ['Ελληνικά (μητρική)', 'Αγγλικά (άριστα - C1)', 'Γερμανικά (βασικά)'];

  const hobbies =
    language === 'en'
      ? ['Origami', 'Papercrafts', 'Board Games', 'Cooking', 'Reading', 'Cycling']
      : ['Οριγκάμι', 'Χειροτεχνίες με Χαρτί', 'Επιτραπέζια Παιχνίδια', 'Μαγειρική', 'Ανάγνωση', 'Ποδηλασία'];

  return (
    <div className="flex-1 space-y-6 lg:space-y-8">
      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center"
      >
        <a
          href="/documents/Kaziales_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white dark:text-black font-semibold gap-2 text-xl"
          >
            <Download className="w-5 h-5 text-white dark:text-black" />
            {language === 'en' ? 'Download Resume (PDF)' : 'Λήψη Βιογραφικού (PDF)'}
          </Button>
        </a>
      </motion.div>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-primary">{t('experience')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-6 py-2">
              <div className="flex justify-between items-start mb-1">
                <h4>{exp.title}</h4>
                <span className="text-primary text-sm">{exp.period}</span>
              </div>
              <p className="text-muted-foreground mb-3">{exp.company}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-primary">{t('education')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-primary/30 pl-6 py-2">
              <div className="flex justify-between items-start mb-1">
                <h4>{edu.degree}</h4>
                <span className="text-primary text-sm">{edu.year}</span>
              </div>
              <p className="text-muted-foreground">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mt-1">{language === 'en' ? 'GPA' : 'Βαθμός'}: {edu.gpa}</p>
              <p className="text-sm text-muted-foreground mt-1">{language === 'en' ? 'Thesis' : 'Διατριβή'}: {edu.thesis}</p>
              <p className="text-sm text-muted-foreground mt-1">{language === 'en' ? 'Advisor' : 'Επόπτης'}: {edu.advisor}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-primary" />
          <h2 className="text-primary">{t('technicalSkills')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        <div className="space-y-6">
          {Object.entries(skills).map(([level, items], idx) => (
            <div key={level}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">
                  {idx === 0 ? '🟠' : idx === 1 ? '🟡' : '⚪'}
                </span>
                <h4>{level}:</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary text-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Honors & Awards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-6 h-6 text-primary" />
          <h2 className="text-primary">{t('honorsAndAwards')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        <ul className="space-y-4">
          {honorsAndAwards.map((award, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-primary mt-1">•</span>
              <div>
                {award.link ? (
                  <a 
                    href={award.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {award.title}
                  </a>
                ) : (
                  <p className="font-medium">{award.title}</p>
                )}
                <p className="text-sm text-primary mt-1">{award.period}</p>
                <p className="text-sm text-muted-foreground mt-1">{award.institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Activities */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <CalendarDays className="w-6 h-6 text-primary" />
          <h2 className="text-primary">{t('activities')}</h2>
          <div className="flex-1 h-px bg-primary/20" />
        </div>
        <ul className="space-y-3">
          {activities.map((activity, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-primary">•</span>
              <div className="flex-1 flex justify-between items-start gap-4">
                <div className="flex-1">
                  {activity.link ? (
                    <a 
                      href={activity.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      dangerouslySetInnerHTML={{
                        __html: activity.title.replace(/"([^"]+)"/g, '"<span class="text-primary">$1</span>"')
                      }}
                    />
                  ) : activity.courses ? (
                    <>
                      <p className="text-muted-foreground">{activity.title}</p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-sm">
                        {activity.courses.map((course, idx) => (
                          <span key={idx}>
                            &nbsp;&nbsp;
                            <a
                              href={course.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {course.name}
                            </a>
                            {idx < activity.courses.length - 1 && <span className="text-muted-foreground">,&nbsp;</span>}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-muted-foreground">{activity.title}</p>
                      {activity.items && (
                        <p className="text-sm text-primary mt-1">{activity.items.join(', ')}</p>
                      )}
                    </>
                  )}
                </div>
                {activity.year && (
                  <span className="text-primary text-sm whitespace-nowrap">{activity.year}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Languages & Hobbies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card border border-border rounded-2xl lg:rounded-3xl p-6 lg:p-8"
      >
        <div className="grid gap-y-14 gap-x-8 md:grid-cols-2 md:gap-x-12 md:gap-y-0">
          {/* Languages */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 mb-4">
              <Languages className="w-6 h-6 text-primary" />
              <h2 className="text-primary">{language === 'en' ? 'Languages' : 'Γλώσσες'}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {spokenLanguages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary text-sm">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          {/* Hobbies */}
          <div className="space-y-3 md:pl-10 md:border-l md:border-primary/20 pt-6 md:pt-0">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <h2 className="text-primary">{language === 'en' ? 'Hobbies' : 'Χόμπι'}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary text-foreground text-sm">
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
