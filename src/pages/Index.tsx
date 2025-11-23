import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  progress: number;
  xp: number;
  level: number;
  locked: boolean;
  icon: string;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const userData = {
    name: 'Алексей Петров',
    level: 12,
    xp: 2450,
    xpToNextLevel: 3000,
    streak: 7,
    totalCourses: 8,
    completedCourses: 3,
    avatar: ''
  };

  const courses: Course[] = [
    { id: 1, title: 'Математика 8 класс', progress: 75, xp: 450, level: 8, locked: false, icon: '📐' },
    { id: 2, title: 'Русский язык', progress: 60, xp: 380, level: 7, locked: false, icon: '📝' },
    { id: 3, title: 'Физика', progress: 45, xp: 290, level: 6, locked: false, icon: '⚛️' },
    { id: 4, title: 'История', progress: 30, xp: 180, level: 5, locked: false, icon: '📜' },
    { id: 5, title: 'Английский язык', progress: 0, xp: 0, level: 9, locked: true, icon: '🇬🇧' },
    { id: 6, title: 'Химия', progress: 0, xp: 0, level: 10, locked: true, icon: '🧪' },
  ];

  const achievements: Achievement[] = [
    { id: 1, title: 'Первые шаги', description: 'Завершите первый урок', icon: '🎯', unlocked: true, rarity: 'common' },
    { id: 2, title: 'Неделя победы', description: '7 дней подряд', icon: '🔥', unlocked: true, rarity: 'rare' },
    { id: 3, title: 'Математик', description: 'Завершите курс математики', icon: '🏆', unlocked: true, rarity: 'epic' },
    { id: 4, title: 'Ночной ученик', description: 'Занимайтесь после полуночи', icon: '🌙', unlocked: false, rarity: 'rare' },
    { id: 5, title: 'Перфекционист', description: '100% в 5 курсах', icon: '⭐', unlocked: false, rarity: 'legendary' },
    { id: 6, title: 'Марафонец', description: '30 дней подряд', icon: '🎖️', unlocked: false, rarity: 'epic' },
  ];

  const rarityColors = {
    common: 'bg-muted',
    rare: 'bg-info/20 border-info',
    epic: 'bg-secondary/20 border-secondary',
    legendary: 'bg-accent/20 border-accent'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GameLearn
            </h1>
            <TabsList className="grid grid-cols-4 w-auto">
              <TabsTrigger value="home" className="gap-2">
                <Icon name="Home" size={18} />
                Главная
              </TabsTrigger>
              <TabsTrigger value="courses" className="gap-2">
                <Icon name="BookOpen" size={18} />
                Курсы
              </TabsTrigger>
              <TabsTrigger value="achievements" className="gap-2">
                <Icon name="Trophy" size={18} />
                Достижения
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <Icon name="User" size={18} />
                Профиль
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="home" className="space-y-6 animate-fade-in">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Добро пожаловать, {userData.name.split(' ')[0]}! 👋</span>
                  <Badge variant="outline" className="text-lg px-4 py-1 bg-primary/10 border-primary">
                    <Icon name="Zap" size={16} className="mr-1" />
                    Уровень {userData.level}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Опыт до следующего уровня</span>
                    <span className="text-sm text-muted-foreground">{userData.xp} / {userData.xpToNextLevel} XP</span>
                  </div>
                  <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="h-3" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl mb-2 animate-glow">🔥</div>
                      <div className="text-2xl font-bold">{userData.streak}</div>
                      <div className="text-sm text-muted-foreground">Дней подряд</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl mb-2">📚</div>
                      <div className="text-2xl font-bold">{userData.completedCourses}/{userData.totalCourses}</div>
                      <div className="text-sm text-muted-foreground">Завершено</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                    <CardContent className="pt-6 text-center">
                      <div className="text-3xl mb-2">⚡</div>
                      <div className="text-2xl font-bold">{userData.xp}</div>
                      <div className="text-sm text-muted-foreground">Всего XP</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="BookMarked" size={24} />
                Активные курсы
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courses.filter(c => !c.locked && c.progress > 0).slice(0, 4).map((course) => (
                  <Card key={course.id} className="hover:border-primary/50 transition-all hover:scale-[1.02] animate-scale-in">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-3xl">{course.icon}</span>
                        <div className="flex-1">
                          <div>{course.title}</div>
                          <Badge variant="secondary" className="mt-1">
                            <Icon name="Star" size={12} className="mr-1" />
                            {course.xp} XP
                          </Badge>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Прогресс</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="w-full" size="sm">
                        Продолжить
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Все курсы</h2>
              <Badge variant="outline">{courses.filter(c => !c.locked).length} доступно</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <Card 
                  key={course.id} 
                  className={`${course.locked ? 'opacity-60' : 'hover:border-primary/50 transition-all hover:scale-[1.02]'} animate-scale-in relative`}
                >
                  {course.locked && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary">
                        <Icon name="Lock" size={12} className="mr-1" />
                        Уровень {course.level}
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{course.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        {!course.locked && (
                          <Badge variant="secondary" className="mt-1">
                            <Icon name="Star" size={12} className="mr-1" />
                            {course.xp} XP
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {!course.locked ? (
                      <>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm">Прогресс</span>
                            <span className="text-sm font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <Button className="w-full" size="sm" variant={course.progress === 0 ? "default" : "outline"}>
                          {course.progress === 0 ? 'Начать' : 'Продолжить'}
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </>
                    ) : (
                      <div className="text-center py-4 text-muted-foreground text-sm">
                        <Icon name="Lock" size={32} className="mx-auto mb-2 opacity-50" />
                        Откроется на {course.level} уровне
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Достижения</h2>
              <Badge variant="outline">
                {achievements.filter(a => a.unlocked).length} / {achievements.length} разблокировано
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id}
                  className={`${rarityColors[achievement.rarity]} border-2 ${
                    achievement.unlocked 
                      ? 'animate-scale-in hover:scale-[1.05] transition-all' 
                      : 'opacity-50 grayscale'
                  }`}
                >
                  <CardContent className="pt-6 text-center space-y-3">
                    <div className={`text-5xl mb-2 ${achievement.unlocked ? 'animate-glow' : ''}`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                    </div>
                    <Badge 
                      variant={achievement.unlocked ? "default" : "secondary"}
                      className={achievement.unlocked ? '' : 'opacity-50'}
                    >
                      {achievement.rarity === 'common' && '⚪ Обычное'}
                      {achievement.rarity === 'rare' && '🔵 Редкое'}
                      {achievement.rarity === 'epic' && '🟣 Эпическое'}
                      {achievement.rarity === 'legendary' && '🟡 Легендарное'}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6 animate-fade-in">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-32 h-32 border-4 border-primary">
                    <AvatarImage src={userData.avatar} />
                    <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-secondary text-white">
                      {userData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-3xl">{userData.name}</CardTitle>
                <CardDescription className="text-lg">
                  <Badge variant="outline" className="text-base px-4 py-1 bg-primary/10 border-primary mt-2">
                    <Icon name="Zap" size={16} className="mr-1" />
                    Уровень {userData.level}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="TrendingUp" size={20} />
                        Прогресс обучения
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Всего XP</span>
                        <span className="text-xl font-bold text-primary">{userData.xp}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Завершено курсов</span>
                        <span className="text-xl font-bold text-secondary">{userData.completedCourses}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Текущая серия</span>
                        <span className="text-xl font-bold text-accent">{userData.streak} 🔥</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="Trophy" size={20} />
                        Достижения
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Разблокировано</span>
                        <span className="text-xl font-bold">{achievements.filter(a => a.unlocked).length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Эпических</span>
                        <span className="text-xl font-bold text-secondary">
                          {achievements.filter(a => a.unlocked && a.rarity === 'epic').length}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Легендарных</span>
                        <span className="text-xl font-bold text-accent">
                          {achievements.filter(a => a.unlocked && a.rarity === 'legendary').length}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BarChart3" size={20} />
                      Статистика по курсам
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {courses.filter(c => !c.locked && c.progress > 0).map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{course.icon}</span>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{course.title}</span>
                              <span className="text-sm text-muted-foreground">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
